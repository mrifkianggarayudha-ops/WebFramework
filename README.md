# 🎮 TechMatch Game - Laravel Version

Game edukasi untuk mencocokkan hardware dan fungsi komputer dengan struktur Laravel yang rapi.

## 🚀 Quick Start (Mudah & Cepat)

### Jalankan Server
```bash
cd "C:\Yudha\TUGASKULII\Semester 6\LaravelGame\public"
C:\xampp\php\php.exe -S localhost:8000
```

### Akses Game
Buka browser: **http://localhost:8000**

## 🎯 Cara Main

1. **Pilih Game**: Hardware atau Fungsi
2. **Cocokkan**: Gambar dengan nama, atau hardware dengan fungsi
3. **Skor**: Dapatkan poin untuk jawaban benar!

## 📁 Struktur Project

```
LaravelGame/
├── public/          # 📄 File game (HTML, CSS, JS, Images)
│   ├── index.html   # 🏠 Halaman utama
│   ├── Hardwere.html# 🖥️ Game hardware
│   ├── Fungsi.html  # ⚙️ Game fungsi
│   ├── script.js    # 🎮 Logic game
│   ├── style.css    # 🎨 Styling
│   └── img/         # 🖼️ Gambar hardware
├── routes/          # 🛣️ Routing Laravel (untuk development)
├── app/            # 🧠 Logic aplikasi
├── resources/      # 📱 Views & assets
└── config/         # ⚙️ Konfigurasi
```

## ✨ Fitur Game

- ✅ **Game Hardware**: Cocokkan gambar Keyboard, Monitor, Mouse
- ✅ **Game Fungsi**: Cocokkan hardware dengan deskripsinya
- ✅ **UI Modern**: Gradient animation & responsive design
- ✅ **Real-time Score**: Feedback langsung untuk setiap jawaban
- ✅ **Petunjuk**: Modal bantuan untuk pemain baru

## 🛠️ Tech Stack

- **Laravel 11** - Framework PHP untuk struktur aplikasi
- **PHP 8.1+** - Backend processing
- **HTML5/CSS3** - Frontend markup & styling
- **Vanilla JavaScript** - Game logic
- **XAMPP** - Local development server

## 🔧 Development Setup (Advanced)

Untuk development penuh dengan Laravel:

```bash
# 1. Install Composer dulu
# Download: https://getcomposer.org/

# 2. Install dependencies
composer install

# 3. Setup environment
cp .env.example .env
php artisan key:generate

# 4. Jalankan server Laravel
php artisan serve
```

## 📝 Catatan

- Project ini menggunakan **PHP built-in server** untuk kemudahan
- File game ada di folder `public/` untuk akses langsung
- Laravel routing sudah disiapkan untuk development future
- Database belum di-setup (bisa ditambah nanti untuk simpan skor)

---

**Selamat bermain! 🎉**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
