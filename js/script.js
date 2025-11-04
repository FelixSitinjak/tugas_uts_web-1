document.addEventListener('DOMContentLoaded',function(){
  const page=document.body.dataset.page
  // apply saved theme early
  const savedTheme=localStorage.getItem('theme'); if(savedTheme==='dark'){document.body.classList.add('dark')}
  if(page==='login')initLogin()
  if(page==='dashboard')initDashboard()
  if(page==='stok')initStok()
  if(page==='checkout')initCheckout()
  if(page==='tracking')initTracking()
})

function openModal(sel){const el=document.querySelector(sel);if(el)el.classList.add('show')}
function closeModal(sel){const el=document.querySelector(sel);if(el)el.classList.remove('show')}

document.addEventListener('click',e=>{const t=e.target;if(t.matches('[data-close]')){e.preventDefault();closeModal(t.getAttribute('data-close'))}})

// Toast utilities
function ensureToastContainer(){let c=document.querySelector('.toast-container');if(!c){c=document.createElement('div');c.className='toast-container';document.body.appendChild(c)}return c}
function showToast(message,type='info',timeout=2500){const c=ensureToastContainer();const n=document.createElement('div');n.className='toast '+type;n.textContent=message;c.appendChild(n);setTimeout(()=>{n.remove()},timeout)}

// Inline error helpers
function setError(input,message){if(!input)return;input.classList.add('is-invalid');let s=input.nextElementSibling;if(!s||!s.classList.contains('error-text')){s=document.createElement('small');s.className='error-text';input.after(s)}s.textContent=message}
function clearError(input){if(!input)return;input.classList.remove('is-invalid');const s=input.nextElementSibling;if(s&&s.classList.contains('error-text'))s.textContent=''}

// Confirm modal (promise-based)
function confirmModal(message){return new Promise(res=>{const m=document.createElement('div');m.className='modal show';m.innerHTML=`<div class="modal-content"><div>${message}</div><div class="confirm-actions"><button class="btn" id="cCancel">Batal</button><button class="btn danger" id="cOk">Ya</button></div></div>`;document.body.appendChild(m);m.querySelector('#cCancel').onclick=()=>{m.remove();res(false)};m.querySelector('#cOk').onclick=()=>{m.remove();res(true)};})}

// Theme toggle helper
function addThemeToggle(){
  const header=document.querySelector('.topbar .container')||document.querySelector('.topbar')
  if(!header||header.dataset.themeAdded) return; header.dataset.themeAdded='1'
  const rightSlot=header.querySelector('.row.align-center.gap-12')||header.querySelector('.row.align-center')||header.lastElementChild
  const btn=document.createElement('button');btn.className='btn';btn.id='btnTheme';btn.title='Ganti Tema';btn.textContent=document.body.classList.contains('dark')?'Light':'Dark'
  btn.addEventListener('click',()=>{document.body.classList.toggle('dark');const mode=document.body.classList.contains('dark')?'dark':'light';localStorage.setItem('theme',mode);btn.textContent=mode==='dark'?'Light':'Dark';showToast('Tema: '+mode,'info')})
  rightSlot?.appendChild(btn)
}

function initLogin(){
  const btnLogin=document.getElementById('btnLogin')
  const btnForgot=document.getElementById('btnForgot')
  const btnRegister=document.getElementById('btnRegister')
  btnForgot&&btnForgot.addEventListener('click',()=>openModal('#modalForgot'))
  btnRegister&&btnRegister.addEventListener('click',()=>openModal('#modalRegister'))
  const forgotSubmit=document.getElementById('forgotSubmit')
  forgotSubmit&&forgotSubmit.addEventListener('click',()=>{showToast('Link reset password dikirim (simulasi).','info');closeModal('#modalForgot')})
  const registerSubmit=document.getElementById('registerSubmit')
  registerSubmit&&registerSubmit.addEventListener('click',()=>{
    const nama=(document.getElementById('regNama')?.value||'').trim()
    const email=(document.getElementById('regEmail')?.value||'').trim()
    const pass=(document.getElementById('regPassword')?.value||'')
    const inNama=document.getElementById('regNama');const inEmail=document.getElementById('regEmail');const inPass=document.getElementById('regPassword')
    clearError(inNama);clearError(inEmail);clearError(inPass)
    if(!nama){setError(inNama,'Nama wajib diisi')}
    if(!email){setError(inEmail,'Email wajib diisi')}
    if(!pass){setError(inPass,'Password wajib diisi')}
    if(!nama||!email||!pass){showToast('Lengkapi data pendaftaran','error');return}
    const emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if(!emailOk){setError(inEmail,'Format email tidak valid');showToast('Email tidak valid','error');return}
    const regUsers=JSON.parse(localStorage.getItem('registeredUsers')||'[]')
    const existsDefault=(window.dataPengguna||[]).some(u=>u.email===email)
    const existsRegistered=regUsers.some(u=>u.email===email)
    if(existsDefault||existsRegistered){setError(inEmail,'Email sudah terdaftar');showToast('Email sudah terdaftar','error');return}
    const newUser={id:Date.now(),nama,email,password:pass,role:'User'}
    regUsers.push(newUser)
    localStorage.setItem('registeredUsers',JSON.stringify(regUsers))
    showToast('Pendaftaran berhasil. Silakan login.','success')
    closeModal('#modalRegister')
    const emailInput=document.getElementById('loginEmail');const passInput=document.getElementById('loginPassword');
    if(emailInput)emailInput.value=email; if(passInput)passInput.value=pass
  })
  btnLogin&&btnLogin.addEventListener('click',()=>{
    const email=document.getElementById('loginEmail').value.trim()
    const pass=document.getElementById('loginPassword').value
    const inEmail=document.getElementById('loginEmail');const inPass=document.getElementById('loginPassword');clearError(inEmail);clearError(inPass)
    if(!email){setError(inEmail,'Email wajib diisi')}
    if(!pass){setError(inPass,'Password wajib diisi')}
    if(!email||!pass){showToast('Lengkapi email & password','error');return}
    const defaults=(window.dataPengguna||[])
    const regs=JSON.parse(localStorage.getItem('registeredUsers')||'[]')
    const all=[...defaults,...regs]
    const user=all.find(u=>u.email===email&&u.password===pass)
    if(!user){setError(inEmail,'Cek email');setError(inPass,'Cek password');showToast('email/password yang anda masukkan salah','error');return}
    localStorage.setItem('currentUser',JSON.stringify({id:user.id,nama:user.nama,email:user.email}))
    showToast('Login berhasil','success');setTimeout(()=>location.href='dashboard.html',300)
  })
}

function initDashboard(){
  const raw=localStorage.getItem('currentUser');if(!raw){location.href='index.html';return}
  const now=new Date();const h=now.getHours();let g='';if(h<11)g='Selamat pagi';else if(h<15)g='Selamat siang';else g='Selamat sore';
  const user=JSON.parse(raw)
  const greeting=document.getElementById('greeting');if(greeting)greeting.textContent=`${g}, ${user.nama}!`
  const btnLogout=document.getElementById('btnLogout');btnLogout&&btnLogout.addEventListener('click',async()=>{if(await confirmModal('Yakin ingin logout?')){localStorage.removeItem('currentUser');showToast('Logout berhasil','success');setTimeout(()=>location.href='index.html',300)}})
  // add theme toggle
  addThemeToggle()
  // add simple icons to dashboard nav cards
  const links=document.querySelectorAll('.card.nav')
  links.forEach(a=>{
    if(a.dataset.iconized) return; a.dataset.iconized='1'
    const href=a.getAttribute('href')||''
    let icon='📚'; if(href.includes('tracking')) icon='📦'; else if(href.includes('checkout')&&a.textContent.includes('Laporan')) icon='📄'; else if(a.textContent.includes('Histori')) icon='🧾'
    a.innerHTML=`<span style="font-size:24px;margin-right:8px">${icon}</span><span>${a.textContent}</span>`
  })
}

function formatRupiah(str){if(typeof str==='number')return 'Rp '+str.toLocaleString('id-ID');if(typeof str==='string'&&str.startsWith('Rp'))return str;const n=parseInt(str||0,10)||0;return 'Rp '+n.toLocaleString('id-ID')}

// Try multiple image extensions if the provided path fails
function applyCover(imgEl, path){
  const url=new URL(path, location.href).pathname
  const dot=url.lastIndexOf('.')
  const base=dot>-1?url.slice(0,dot):url
  const first=dot>-1?url:base+'.jpg'
  const candidates=[first, base+'.jpg', base+'.jpeg', base+'.png']
  let i=0
  function tryNext(){ if(i>=candidates.length){ imgEl.style.display='none'; return }
    imgEl.src=candidates[i++]
  }
  imgEl.onerror=tryNext
  tryNext()
}

function initStok(){
  const tbody=document.getElementById('stokBody')
  function render(){
    tbody.innerHTML=''
    ;(window.dataKatalogBuku||[]).forEach(it=>{
      const tr=document.createElement('tr')
      const tdKode=document.createElement('td');tdKode.textContent=it.kodeBarang
      const tdCover=document.createElement('td');
      const img=document.createElement('img');img.alt=it.namaBarang;img.style.width='48px';img.style.height='48px';img.style.objectFit='cover';img.style.borderRadius='6px'
      applyCover(img, it.cover||'')
      // preview on click
      img.style.cursor='zoom-in'
      img.addEventListener('click',()=>openImagePreview(img.src, it.namaBarang))
      tdCover.appendChild(img)
      const tdNama=document.createElement('td');tdNama.textContent=it.namaBarang
      const tdJenis=document.createElement('td');tdJenis.textContent=it.jenisBarang
      const tdEdisi=document.createElement('td');tdEdisi.textContent=it.edisi
      const tdStok=document.createElement('td');tdStok.textContent=it.stok
      const tdHarga=document.createElement('td');tdHarga.textContent=formatRupiah(it.harga)
      tr.append(tdKode,tdCover,tdNama,tdJenis,tdEdisi,tdStok,tdHarga)
      tbody.appendChild(tr)
    })
  }
  render()
  const btn=document.getElementById('btnAddStock')
  btn&&btn.addEventListener('click',()=>{
    const inKode=document.getElementById('inKode');const inNama=document.getElementById('inNama');const inJenis=document.getElementById('inJenis');const inEdisi=document.getElementById('inEdisi');const inStok=document.getElementById('inStok');const inHarga=document.getElementById('inHarga')
    ;[inKode,inNama,inJenis,inEdisi,inStok,inHarga].forEach(clearError)
    const kode=inKode.value.trim();const nama=inNama.value.trim();const jenis=inJenis.value.trim();const edisi=inEdisi.value;const stok=parseInt(inStok.value||'0',10);const harga=inHarga.value.trim()||'Rp 0'
    if(!kode){setError(inKode,'Kode wajib')}
    if(!nama){setError(inNama,'Nama wajib')}
    if(!kode||!nama){showToast('Isi minimal Kode dan Nama','error');return}
    window.dataKatalogBuku.push({kodeBarang:kode,namaBarang:nama,jenisBarang:jenis,edisi:String(edisi||'1'),stok:stok||0,harga:harga,cover:''})
    render()
    showToast('Stok berhasil ditambahkan','success')
  })
}

function initCheckout(){
  const select=document.getElementById('selectItem');const qty=document.getElementById('qtyItem');const body=document.getElementById('cartBody');const totalEl=document.getElementById('cartTotal')
  ;(window.dataKatalogBuku||[]).forEach(b=>{const o=document.createElement('option');o.value=b.kodeBarang;o.textContent=`${b.kodeBarang} - ${b.namaBarang}`;o.dataset.harga=b.harga;o.dataset.nama=b.namaBarang;select.appendChild(o)})
  const cart=[]
  function toNumber(rp){return parseInt(String(rp).replace(/[^0-9]/g,''),10)||0}
  function render(){
    body.innerHTML=''
    let total=0
    cart.forEach((c,i)=>{
      const sub=c.qty*toNumber(c.harga);total+=sub
      const tr=document.createElement('tr')
      tr.innerHTML=`<td>${c.kode}</td><td>${c.nama}</td><td><input type=\"number\" min=\"1\" value=\"${c.qty}\" data-idx=\"${i}\" class=\"qty-input\" style=\"width:70px\"></td><td>${formatRupiah(c.harga)}</td><td>${formatRupiah(sub)}</td><td><button class=\"btn danger\" data-rm=\"${i}\">Hapus</button></td>`
      body.appendChild(tr)
    })
    totalEl.textContent=formatRupiah(total)
  }
  document.addEventListener('input',e=>{if(e.target.classList.contains('qty-input')){const idx=parseInt(e.target.dataset.idx,10);cart[idx].qty=parseInt(e.target.value||'1',10);render()}})
  document.addEventListener('click',async e=>{if(e.target.matches('[data-rm]')){const idx=parseInt(e.target.getAttribute('data-rm'),10);if(await confirmModal('Hapus item ini dari keranjang?')){cart.splice(idx,1);render();showToast('Item dihapus','info')}}})
  document.getElementById('btnAddCart').addEventListener('click',()=>{
    const opt=select.options[select.selectedIndex];const kode=opt.value;const nama=opt.dataset.nama;const harga=opt.dataset.harga;const q=parseInt(qty.value||'1',10)
    const ex=cart.find(c=>c.kode===kode);if(ex){ex.qty+=q}else{cart.push({kode,nama,harga,qty:q})}
    render();showToast('Ditambahkan ke keranjang','success')
  })
  document.getElementById('btnSubmitOrder').addEventListener('click',()=>{
    const inNama=document.getElementById('custNama');const inAlamat=document.getElementById('custAlamat');const bayar=document.getElementById('custBayar').value
    const nama=inNama.value.trim();const alamat=inAlamat.value.trim();
    clearError(inNama);clearError(inAlamat)
    if(!cart.length){showToast('Keranjang kosong','error');return}
    if(!nama){setError(inNama,'Nama wajib')}
    if(!alamat){setError(inAlamat,'Alamat wajib')}
    if(!nama||!alamat){showToast('Lengkapi data pemesan','error');return}
    showToast(`Pesanan berhasil dibuat! Pembayaran: ${bayar}`,'success')
  })
}

function initTracking(){
  const input=document.getElementById('inputDO');const btn=document.getElementById('btnCariDO');const box=document.getElementById('hasilDO')
  const nama=document.getElementById('doNama');const status=document.getElementById('doStatus');const eksp=document.getElementById('doEkspedisi');const tgl=document.getElementById('doTanggal');const paket=document.getElementById('doPaket');const total=document.getElementById('doTotal');const prog=document.getElementById('doProgress');const list=document.getElementById('doPerjalanan')
  function progressFromStatus(s){const map={'Dikirim':40,'Dalam Perjalanan':70,'Selesai':100};return map[s]||30}
  btn.addEventListener('click',()=>{
    const no=input.value.trim();const d=(window.dataTracking||{})[no]
    if(!d){showToast('Nomor DO tidak ditemukan','error');box.style.display='none';return}
    box.style.display='block';nama.textContent=d.nama;status.textContent=d.status;eksp.textContent=d.ekspedisi;tgl.textContent=d.tanggalKirim;paket.textContent=d.paket;total.textContent=d.total;prog.style.width=progressFromStatus(d.status)+'%'
    // apply badge style to status
    const st=d.status
    status.className=''; status.classList.add('badge', st==='Selesai'?'badge-success':(st==='Dalam Perjalanan'?'badge-info':'badge-warning'))
    list.innerHTML='';(d.perjalanan||[]).forEach(p=>{const li=document.createElement('li');li.textContent=p.waktu+' — '+p.keterangan;list.appendChild(li)})
  })
  // add theme toggle on this page too
  addThemeToggle()
}

// Image preview modal
function openImagePreview(src, title=''){
  const m=document.createElement('div');m.className='modal show';m.addEventListener('click',e=>{if(e.target===m)m.remove()})
  m.innerHTML=`<div class="modal-content" style="background:transparent;border:none;box-shadow:none;padding:0"><img class="preview-img" src="${src}" alt="${title}"><div class="preview-title">${title||''}</div></div>`
  document.body.appendChild(m)
}
