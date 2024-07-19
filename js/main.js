(function($) { // Membungkus kode dalam fungsi anonim agar tidak bentrok dengan kode lain
	"use strict" // Memastikan kode JavaScript dieksekusi dalam mode ketat
  
	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) { // Saat elemen dengan kelas 'menu-toggle > a' diklik
	  e.preventDefault(); // Mencegah aksi default dari elemen
	  $('#responsive-nav').toggleClass('active'); // Menambahkan atau menghapus kelas 'active' pada elemen dengan ID 'responsive-nav'
	});
  
	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) { // Saat elemen dengan kelas 'cart-dropdown' diklik
	  e.stopPropagation(); // Mencegah aksi klik agar tidak menutup dropdown
	});
  
	/////////////////////////////////////////
  
	// Products Slick
	$('.products-slick').each(function() { // Untuk setiap elemen dengan kelas 'products-slick'
	  var $this = $(this), // Simpan elemen saat ini ke variabel $this
		  $nav = $this.attr('data-nav'); // Ambil nilai atribut 'data-nav' dari elemen
  
	  $this.slick({ // Menginisialisasi plugin Slick pada elemen
		slidesToShow: 4, // Menampilkan 4 slide sekaligus
		slidesToScroll: 1, // Menggulung 1 slide setiap kali
		autoplay: true, // Mengaktifkan autoplay
		infinite: true, // Mengaktifkan loop tak terbatas
		speed: 300, // Kecepatan transisi dalam milidetik
		dots: false, // Tidak menampilkan indikator titik
		arrows: true, // Menampilkan panah navigasi
		appendArrows: $nav ? $nav : false, // Menambahkan panah navigasi ke elemen yang ditentukan oleh 'data-nav' jika ada
		responsive: [{ // Pengaturan responsif
		  breakpoint: 991, // Pada lebar layar 991px atau lebih kecil
		  settings: {
			slidesToShow: 2, // Menampilkan 2 slide
			slidesToScroll: 1, // Menggulung 1 slide
		  }
		},
		{
		  breakpoint: 480, // Pada lebar layar 480px atau lebih kecil
		  settings: {
			slidesToShow: 1, // Menampilkan 1 slide
			slidesToScroll: 1, // Menggulung 1 slide
		  }
		}]
	  });
	});
  
	// Products Widget Slick
	$('.products-widget-slick').each(function() { // Untuk setiap elemen dengan kelas 'products-widget-slick'
	  var $this = $(this), // Simpan elemen saat ini ke variabel $this
		  $nav = $this.attr('data-nav'); // Ambil nilai atribut 'data-nav' dari elemen
  
	  $this.slick({ // Menginisialisasi plugin Slick pada elemen
		infinite: true, // Mengaktifkan loop tak terbatas
		autoplay: true, // Mengaktifkan autoplay
		speed: 300, // Kecepatan transisi dalam milidetik
		dots: false, // Tidak menampilkan indikator titik
		arrows: true, // Menampilkan panah navigasi
		appendArrows: $nav ? $nav : false, // Menambahkan panah navigasi ke elemen yang ditentukan oleh 'data-nav' jika ada
	  });
	});
  
	/////////////////////////////////////////
  
	// Product Main img Slick
	$('#product-main-img').slick({ // Menginisialisasi plugin Slick pada elemen dengan ID 'product-main-img'
	  infinite: true, // Mengaktifkan loop tak terbatas
	  speed: 300, // Kecepatan transisi dalam milidetik
	  dots: false, // Tidak menampilkan indikator titik
	  arrows: true, // Menampilkan panah navigasi
	  fade: true, // Mengaktifkan efek fade saat transisi
	  asNavFor: '#product-imgs', // Menyinkronkan dengan elemen lain yang memiliki ID 'product-imgs'
	});
  
	// Product imgs Slick
	$('#product-imgs').slick({ // Menginisialisasi plugin Slick pada elemen dengan ID 'product-imgs'
	  slidesToShow: 3, // Menampilkan 3 slide sekaligus
	  slidesToScroll: 1, // Menggulung 1 slide setiap kali
	  arrows: true, // Menampilkan panah navigasi
	  centerMode: true, // Mengaktifkan mode pusat
	  focusOnSelect: true, // Memfokuskan slide saat dipilih
	  centerPadding: 0, // Menghilangkan padding di tengah
	  vertical: true, // Mengatur slide menjadi vertikal
	  asNavFor: '#product-main-img', // Menyinkronkan dengan elemen lain yang memiliki ID 'product-main-img'
	  responsive: [{ // Pengaturan responsif
		breakpoint: 991, // Pada lebar layar 991px atau lebih kecil
		settings: {
		  vertical: false, // Menonaktifkan slide vertikal
		  arrows: false, // Menonaktifkan panah navigasi
		  dots: true, // Menampilkan indikator titik
		}
	  }]
	});
  
	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img'); // Ambil elemen dengan ID 'product-main-img'
	if (zoomMainProduct) { // Jika elemen ada
	  $('#product-main-img .product-preview').zoom(); // Menginisialisasi plugin zoom pada elemen dengan kelas 'product-preview' di dalam elemen 'product-main-img'
	}
  
	/////////////////////////////////////////
  
	// Input number
	$('.input-number').each(function() { // Untuk setiap elemen dengan kelas 'input-number'
	  var $this = $(this), // Simpan elemen saat ini ke variabel $this
	  $input = $this.find('input[type="number"]'), // Temukan elemen input tipe number di dalam elemen ini
	  up = $this.find('.qty-up'), // Temukan elemen dengan kelas 'qty-up' di dalam elemen ini
	  down = $this.find('.qty-down'); // Temukan elemen dengan kelas 'qty-down' di dalam elemen ini
  
	  down.on('click', function () { // Saat elemen 'qty-down' diklik
		var value = parseInt($input.val()) - 1; // Kurangi nilai input dengan 1
		value = value < 1 ? 1 : value; // Jika nilai kurang dari 1, setel menjadi 1
		$input.val(value); // Setel nilai input
		$input.change(); // Trigger event change pada input
		updatePriceSlider($this , value); // Update slider harga
	  });
  
	  up.on('click', function () { // Saat elemen 'qty-up' diklik
		var value = parseInt($input.val()) + 1; // Tambah nilai input dengan 1
		$input.val(value); // Setel nilai input
		$input.change(); // Trigger event change pada input
		updatePriceSlider($this , value); // Update slider harga
	  });
	});

	// Mengambil elemen input maksimal dan minimal harga dari DOM
var priceInputMax = document.getElementById('price-max'),
    priceInputMin = document.getElementById('price-min');

// Menambahkan event listener untuk perubahan nilai pada input maksimal harga
priceInputMax.addEventListener('change', function(){
    // Memanggil fungsi updatePriceSlider saat nilai input berubah
    updatePriceSlider($(this).parent(), this.value);
});

// Menambahkan event listener untuk perubahan nilai pada input minimal harga
priceInputMin.addEventListener('change', function(){
    // Memanggil fungsi updatePriceSlider saat nilai input berubah
    updatePriceSlider($(this).parent(), this.value);
});

// Fungsi untuk memperbarui slider harga berdasarkan nilai input
function updatePriceSlider(elem, value) {
    // Jika elemen memiliki kelas 'price-min', set nilai minimal pada slider
    if (elem.hasClass('price-min')) {
        console.log('min');
        priceSlider.noUiSlider.set([value, null]);
    // Jika elemen memiliki kelas 'price-max', set nilai maksimal pada slider
    } else if (elem.hasClass('price-max')) {
        console.log('max');
        priceSlider.noUiSlider.set([null, value]);
    }
}

// Mengambil elemen slider harga dari DOM
var priceSlider = document.getElementById('price-slider');
if (priceSlider) {
    // Membuat slider harga dengan noUiSlider
    noUiSlider.create(priceSlider, {
        start: [10000, 1000000], // Nilai awal slider
        connect: true, // Menghubungkan dua pegangan slider
        step: 1, // Langkah perubahan nilai slider
        range: {
            'min': 10000, // Nilai minimum slider
            'max': 1000000 // Nilai maksimum slider
        }
    });

    // Menambahkan event listener untuk pembaruan nilai slider
    priceSlider.noUiSlider.on('update', function(values, handle) {
        var value = values[handle];
        // Memperbarui nilai input maksimal atau minimal berdasarkan pegangan yang diubah
        handle ? priceInputMax.value = value : priceInputMin.value = value;
    });
}

// Menutup fungsi utama jQuery
})(jQuery);
