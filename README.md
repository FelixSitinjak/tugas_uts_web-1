# Nama : Felix Amon Sitinjak
# NIM : 312410063
# Kelas : TI.24.A1

**Halaman Login**
<img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/d338c7d4-46a9-46fc-82e7-13c23218ea4e" />

**Code**
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Toko Buku</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="login">
  <div class="container center">
    <div class="card auth">
      <h1>Toko Buku</h1>
      <div class="field">
        <label for="loginEmail">Email</label>
        <input type="email" id="loginEmail" placeholder="email@contoh.com" required>
      </div>
      <div class="field">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="••••••••" required>
      </div>
      <button class="btn primary full" id="btnLogin">Login</button>
      <div class="row space-between mt-12">
        <button class="link" id="btnForgot">Lupa Password</button>
        <button class="link" id="btnRegister">Daftar</button>
      </div>
    </div>
  </div>

  <div class="modal" id="modalForgot">
    <div class="modal-content">
      <h3>Lupa Password</h3>
      <div class="field">
        <label>Email</label>
        <input type="email" id="forgotEmail" placeholder="email@contoh.com">
      </div>
      <div class="row end gap-8">
        <button class="btn" data-close="#modalForgot">Tutup</button>
        <button class="btn primary" id="forgotSubmit">Kirim</button>
      </div>
    </div>
  </div>

  <div class="modal" id="modalRegister">
    <div class="modal-content">
      <h3>Daftar Akun</h3>
      <div class="field">
        <label>Nama</label>
        <input type="text" id="regNama" placeholder="Nama lengkap">
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" id="regEmail" placeholder="email@contoh.com">
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" id="regPassword" placeholder="Password">
      </div>
      <div class="row end gap-8">
        <button class="btn" data-close="#modalRegister">Tutup</button>
        <button class="btn primary" id="registerSubmit">Daftar</button>
      </div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
```

**Penjelasan**
**Toko Buku – Halaman Login**
Proyek ini adalah bagian dari tugas UTS Pemrograman Web 1, menampilkan antarmuka halaman login untuk aplikasi sederhana bernama Toko Buku. Halaman ini dirancang dengan tampilan modern, responsif, dan mudah digunakan.
**Fitur Utama**
Form Login dengan validasi input email dan password.
Modal Lupa Password untuk mengirim permintaan reset password.
Modal Daftar Akun untuk pendaftaran pengguna baru.
Desain Responsif agar nyaman digunakan di desktop maupun perangkat mobile.
Antarmuka Bersih dan Minimalis menggunakan HTML5, CSS3, dan JavaScript.
**Teknologi yang Digunakan**
HTML5 – Struktur halaman dan elemen form.
CSS3 – Styling dan tata letak halaman (melalui file style.css).
JavaScript (Vanilla) – Interaktivitas (membuka/menutup modal, validasi form).

**Dashboard Menu**
<img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/43b71f37-afba-43b2-9c55-83e97408aaec" />

**Code**
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - Toko Buku</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="dashboard">
  <header class="topbar">
    <div class="container row space-between align-center">
      <div class="row align-center gap-8">
        <img src="assets/toko buku.png" alt="logo" class="logo" onerror="this.style.display='none'">
        <strong>Toko Buku</strong>
      </div>
      <div class="row align-center gap-12">
        <span id="greeting"></span>
        <button class="btn" id="btnLogout">Logout</button>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="grid-2 gap-16 mt-16">
      <a class="card nav" href="stok.html">Informasi Stok/Katalog</a>
      <a class="card nav" href="tracking.html">Tracking Pengiriman</a>
      <a class="card nav" href="checkout.html">Laporan Pemesanan</a>
      <a class="card nav" href="checkout.html#history">Histori Transaksi</a>
    </div>
  </main>

  <script src="js/data.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
```

**Penjelasan**
**Dashboard Page (dashboard.html)**
Menampilkan sambutan personal seperti:
“Selamat sore, Felix!”
Tombol Logout untuk kembali ke halaman login.
Mode Dark/Light (opsional, tergantung pada CSS/JS tambahan).
Menu navigasi berbentuk kartu (card) dengan tautan ke:
Informasi Stok/Katalog
Tracking Pengiriman
Laporan Pemesanan
Histori Transaksi
**Teknologi yang Digunakan**
| Teknologi                | Deskripsi                                                              |
| ------------------------ | ---------------------------------------------------------------------- |
| **HTML5**                | Struktur halaman, form login, dan layout dashboard                     |
| **CSS3**                 | Styling UI (menggunakan class seperti `.card`, `.btn`, `.grid-2`, dll) |
| **JavaScript (Vanilla)** | Mengatur logika login, logout, greeting, dan interaktivitas modal      |

**Informasi Stok/Katalog**
<img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/4bc16158-5023-4f82-aafa-d23976d73e26" />

**Code**
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stok/Katalog - Toko Buku</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="stok">
  <header class="topbar">
    <div class="container row space-between align-center">
      <a class="btn" href="dashboard.html">Kembali</a>
      <strong>Informasi Stok/Katalog</strong>
      <span></span>
    </div>
  </header>

  <main class="container mt-16">
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th>Kode</th>
            <th>Cover</th>
            <th>Nama</th>
            <th>Jenis</th>
            <th>Edisi</th>
            <th>Stok</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody id="stokBody"></tbody>
      </table>
    </div>

    <div class="card mt-16">
      <h3>Tambah Stok Baru</h3>
      <div class="grid-2 gap-12 mt-8">
        <input type="text" id="inKode" placeholder="Kode">
        <input type="text" id="inNama" placeholder="Nama Buku">
        <input type="text" id="inJenis" placeholder="Jenis">
        <input type="number" id="inEdisi" placeholder="Edisi">
        <input type="number" id="inStok" placeholder="Stok">
        <input type="text" id="inHarga" placeholder="Harga contoh: Rp 100.000">
      </div>
      <div class="row end mt-12">
        <button class="btn primary" id="btnAddStock">Tambah</button>
      </div>
    </div>
  </main>

  <script src="js/data.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
```

**Penjelasan**
**Stok & Katalog (stok.html)**
Tabel daftar buku dengan kolom:
Kode, Cover, Nama, Jenis, Edisi, Stok, dan Harga.
Form Tambah Stok Baru di bagian bawah untuk memasukkan data buku baru secara dinamis.
Semua data buku ditampilkan menggunakan JavaScript DOM Manipulation dari data.js
stok
Tombol Tambah akan memperbarui tabel tanpa perlu reload halaman.

**Teknologi yang Digunakan**
| Teknologi                   | Fungsi                                               |
| --------------------------- | ---------------------------------------------------- |
| **HTML5**                   | Struktur halaman dan elemen UI                       |
| **CSS3**                    | Desain, tata letak, dan efek visual                  |
| **JavaScript (Vanilla)**    | Logika aplikasi, event listener, manipulasi data DOM |
| **LocalStorage (opsional)** | Menyimpan data login atau stok sementara di browser  |

**Halaman Pemesanan**
<img width="959" height="505" alt="image" src="https://github.com/user-attachments/assets/76a4a6e0-9d7d-49c9-a9e3-4728a7c75247" />

**Code**
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pemesanan - Toko Buku</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="checkout">
  <header class="topbar">
    <div class="container row space-between align-center">
      <a class="btn" href="dashboard.html">Kembali</a>
      <strong>Halaman Pemesanan</strong>
      <span></span>
    </div>
  </header>

  <main class="container mt-16">
    <div class="grid-2 gap-16">
      <div class="card">
        <div class="row gap-8">
          <select id="selectItem"></select>
          <input type="number" id="qtyItem" min="1" value="1">
          <button class="btn" id="btnAddCart">Tambah</button>
        </div>
        <table class="table mt-12">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama</th>
              <th>Qty</th>
              <th>Harga</th>
              <th>Subtotal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody id="cartBody"></tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="right">Total</td>
              <td id="cartTotal">Rp 0</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="card">
        <h3>Data Pemesan</h3>
        <div class="field">
          <label>Nama</label>
          <input id="custNama" type="text" placeholder="Nama pemesan">
        </div>
        <div class="field">
          <label>Alamat</label>
          <textarea id="custAlamat" rows="3" placeholder="Alamat lengkap"></textarea>
        </div>
        <div class="field">
          <label>Metode Pembayaran</label>
          <select id="custBayar">
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="QRIS">QRIS</option>
            <option value="COD">COD</option>
          </select>
        </div>
        <button class="btn primary full" id="btnSubmitOrder">Buat Pesanan</button>
      </div>
    </div>
  </main>

  <script src="js/data.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
```

**Penjelasan**
**Pemesanan Buku (checkout.html)**
Dropdown untuk memilih buku dari katalog (selectItem).
Input jumlah (qtyItem) dan tombol Tambah untuk menambahkan ke keranjang.
Tabel keranjang otomatis menampilkan subtotal & total harga.
Kolom Data Pemesan mencakup:
Nama
Alamat
Metode Pembayaran (Transfer Bank, QRIS, COD)
Tombol “Buat Pesanan” untuk menyelesaikan transaksi (simulasi pemesanan)
**Teknologi yang Digunakan**
| Teknologi                   | Kegunaan                                           |
| --------------------------- | -------------------------------------------------- |
| **HTML5**                   | Struktur halaman dan elemen UI                     |
| **CSS3**                    | Desain antarmuka dan tata letak halaman            |
| **JavaScript (Vanilla)**    | Interaktivitas, validasi, dan logika aplikasi      |
| **LocalStorage (opsional)** | Menyimpan data sementara seperti stok atau pesanan |

**Informasi Pengiriman**
<img width="959" height="500" alt="image" src="https://github.com/user-attachments/assets/212ce756-fb1b-44b9-8f00-e52261ac9777" />

**Code**
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tracking Pengiriman - Toko Buku</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="tracking">
  <header class="topbar">
    <div class="container row space-between align-center">
      <a class="btn" href="dashboard.html">Kembali</a>
      <strong>Tracking Pengiriman</strong>
      <span></span>
    </div>
  </header>

  <main class="container mt-16">
    <div class="card">
      <div class="row gap-8">
        <input type="text" id="inputDO" placeholder="Nomor Delivery Order">
        <button class="btn primary" id="btnCariDO">Cari</button>
      </div>
    </div>

    <div class="card mt-16" id="hasilDO" style="display:none">
      <div class="grid-2 gap-16">
        <div>
          <div class="field small"><label>Nama Pemesan</label><div id="doNama"></div></div>
          <div class="field small"><label>Status</label><div id="doStatus"></div></div>
          <div class="progress"><div id="doProgress"></div></div>
        </div>
        <div>
          <div class="field small"><label>Ekspedisi</label><div id="doEkspedisi"></div></div>
          <div class="field small"><label>Tanggal Kirim</label><div id="doTanggal"></div></div>
          <div class="field small"><label>Jenis Paket</label><div id="doPaket"></div></div>
          <div class="field small"><label>Total Pembayaran</label><div id="doTotal"></div></div>
        </div>
      </div>
      <h3 class="mt-16">Detail Perjalanan</h3>
      <ul id="doPerjalanan" class="timeline"></ul>
    </div>
  </main>

  <script src="js/data.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
```

**Penjelasan**
**Tracking Pengiriman (tracking.html)**
Input Nomor Delivery Order (DO) untuk mencari pesanan.
Menampilkan:
Nama Pemesan
Status Pengiriman (misalnya: Dikirim, Selesai, Dalam Proses)
Ekspedisi, Tanggal Kirim, Jenis Paket, dan Total Pembayaran.
Detail perjalanan pengiriman ditampilkan dalam format timeline interaktif.
**Teknologi yang Digunakan**
| Teknologi                   | Kegunaan                                          |
| --------------------------- | ------------------------------------------------- |
| **HTML5**                   | Struktur dan elemen halaman                       |
| **CSS3**                    | Tampilan, warna, dan layout UI                    |
| **JavaScript (Vanilla)**    | Logika program, event handler, dan manipulasi DOM |
| **LocalStorage (opsional)** | Penyimpanan sementara data pengguna/pesanan       |
