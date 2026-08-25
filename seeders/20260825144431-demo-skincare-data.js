'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Insert Data Ingredients (30 Bahan Aktif Skincare)
    await queryInterface.bulkInsert('Ingredients', [
      { id: 1, name: 'Centella Asiatica Extract', benefits: 'Menenangkan kulit kemerahan, meredakan iritasi, dan memperkuat skin barrier.', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Niacinamide', benefits: 'Mencerahkan kulit, menyamarkan noda hitam, dan mengontrol produksi minyak.', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Hyaluronic Acid', benefits: 'Memberikan hidrasi mendalam dan menjaga kelembapan kulit agar tetap kenyal.', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Salicylic Acid (BHA)', benefits: 'Membersihkan pori-pori tersumbat, mengatasi komedo, dan melawan jerawat.', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Ceramide NP', benefits: 'Memperbaiki dan melindungi skin barrier dari kerusakan eksternal.', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Glycolic Acid (AHA)', benefits: 'Mengangkat sel kulit mati dan mempercepat regenerasi kulit.', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Retinol', benefits: 'Menyamarkan tanda-tanda penuaan dini dan merangsang produksi kolagen.', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Alpha Arbutin', benefits: 'Memudarkan hiperpigmentasi dan meratakan warna kulit.', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Tea Tree Oil', benefits: 'Anti-bakteri alami untuk merawat kulit berjerawat.', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Panthenol (Pro-Vitamin B5)', benefits: 'Menghidrasi serta menenangkan kulit yang meradang.', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, name: 'Allantoin', benefits: 'Melembapkan dan mempercepat penyembuhan luka ringan pada kulit.', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Vitamin C (Ascorbic Acid)', benefits: 'Antioksidan tinggi untuk mencerahkan wajah dan melindungi dari radikal bebas.', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, name: 'Squalane', benefits: 'Melembapkan tanpa membuat pori-pori tersumbat (non-comedogenic).', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, name: 'Green Tea Extract', benefits: 'Sebagai antioksidan dan mengontrol sebum berlebih.', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, name: 'Peptides', benefits: 'Mendukung produksi kolagen agar kulit tetap kencang.', createdAt: new Date(), updatedAt: new Date() },
      { id: 16, name: 'Bakuchiol', benefits: 'Alternatif retinol alami yang aman untuk kulit sensitif dan ibu hamil.', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, name: 'Galactomyces Ferment Filtrate', benefits: 'Mencerahkan, memperbaiki tekstur kulit, dan menjaga elastisitas.', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, name: 'Snail Secretion Filtrate', benefits: 'Mempercepat regenerasi kulit dan memudarkan bekas luka jerawat.', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, name: 'Mugwort Extract', benefits: 'Menenangkan kulit berjerawat dan bersifat anti-inflamasi.', createdAt: new Date(), updatedAt: new Date() },
      { id: 20, name: 'Tranexamic Acid', benefits: 'Efektif memudarkan noda hitam membandel dan melasma.', createdAt: new Date(), updatedAt: new Date() },
      { id: 21, name: 'Sulfur', benefits: 'Mengeringkan jerawat aktif dan mengurangi kelebihan minyak.', createdAt: new Date(), updatedAt: new Date() },
      { id: 22, name: 'Propolis Extract', benefits: 'Menutrisi kulit, melembapkan, serta melawan bakteri penyebab jerawat.', createdAt: new Date(), updatedAt: new Date() },
      { id: 23, name: 'Colloidal Oatmeal', benefits: 'Menenangkan kulit yang sangat kering, gatal, atau eksim.', createdAt: new Date(), updatedAt: new Date() },
      { id: 24, name: 'Licorice Extract', benefits: 'Mencerahkan kulit secara alami dan mengurangi kemerahan.', createdAt: new Date(), updatedAt: new Date() },
      { id: 25, name: 'Lactic Acid (AHA)', benefits: 'Eksfoliator yang lebih lembut untuk mencerahkan dan melembapkan.', createdAt: new Date(), updatedAt: new Date() },
      { id: 26, name: 'Zinc PCA', benefits: 'Mengontrol sekresi sebum dan meringkas tampilan pori-pori.', createdAt: new Date(), updatedAt: new Date() },
      { id: 27, name: 'Caffeine', benefits: 'Mengurangi pembengkakan di sekitar mata dan menyegarkan kulit lelah.', createdAt: new Date(), updatedAt: new Date() },
      { id: 28, name: 'Rosehip Oil', benefits: 'Menutrisi kulit dengan asam lemak esensial dan antioksidan.', createdAt: new Date(), updatedAt: new Date() },
      { id: 29, name: 'Shea Butter', benefits: 'Memberikan kelembapan ekstra untuk kulit kering hingga sangat kering.', createdAt: new Date(), updatedAt: new Date() },
      { id: 30, name: 'Aloe Vera Extract', benefits: 'Memberikan sensasi sejuk instan dan menghidrasi kulit.', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 2. Insert Data Products (50 Produk Skincare Asli)
    await queryInterface.bulkInsert('Products', [
      { id: 1, name: 'SKIN1004 Madagascar Centella Ampoule', description: 'Ampoule dengan 100% ekstrak Centella Asiatica murni dari Madagaskar.', imageUrl: 'https://images.example.com/skin1004_ampoule.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'SKIN1004 Madagascar Centella Tone Brightening Capsule Ampoule', description: 'Ampoule untuk mencerahkan sekaligus meredakan kemerahan pada kulit sensitif.', imageUrl: 'https://images.example.com/skin1004_tone_brightening.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'SKIN1004 Madagascar Centella Soothing Cream', description: 'Krim pelembap wajah bertekstur gel ringan dengan efek cooling.', imageUrl: 'https://images.example.com/skin1004_soothing_cream.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'SKIN1004 Madagascar Centella Light Cleansing Oil', description: 'Pembersih makeup berbahan dasar minyak yang ringan dan tidak perih di mata.', imageUrl: 'https://images.example.com/skin1004_cleansing_oil.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'SKIN1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum', description: 'Tabir surya harian SPF50+ PA++++ dengan kandungan hyalu-cica.', imageUrl: 'https://images.example.com/skin1004_sun_serum.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Somethinc 5% Niacinamide Barrier Serum', description: 'Serum pencerah pemula yang aman untuk memperkuat skin barrier.', imageUrl: 'https://images.example.com/somethinc_niacinamide_5.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Somethinc 10% Niacinamide + Moisture Sabi Beet Serum', description: 'Serum unggulan untuk mencerahkan maksimal dan menyamarkan noda hitam.', imageUrl: 'https://images.example.com/somethinc_niacinamide_10.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Somethinc Level 1% Encapsulated Retinol', description: 'Retinol lembut yang aman untuk pemula guna mencegah penuaan dini.', imageUrl: 'https://images.example.com/somethinc_retinol.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Somethinc Bakuchiol Skin Interpreter Oil', description: 'Alternatif retinol alami berbasis tumbuhan untuk ibu hamil dan menyusui.', imageUrl: 'https://images.example.com/somethinc_bakuchiol.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Somethinc Low pH Gentle Jelly Cleanser', description: 'Pembersih wajah vegan ber-pH seimbang yang ramah bagi kulit sensitif.', imageUrl: 'https://images.example.com/somethinc_cleanser.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 11, name: 'Skintific 5X Ceramide Barrier Repair Moisturizer', description: 'Pelembap viral dengan kombinasi 5 jenis ceramide untuk memperbaiki skin barrier.', imageUrl: 'https://images.example.com/skintific_ceramide.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Skintific 10% Vitamin C Brightening Glow Serum', description: 'Serum vitamin C murni untuk mengatasi kulit kusam dan flek hitam.', imageUrl: 'https://images.example.com/skintific_vitc.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 13, name: 'Skintific All Day Light Sunscreen Mist SPF50 PA++++', description: 'Sunscreen spray praktis tanpa whitecast untuk reapply sepanjang hari.', imageUrl: 'https://images.example.com/skintific_sun_mist.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 14, name: 'Skintific Salicylic Acid Anti Acne Serum', description: 'Serum penumpas jerawat aktif dan beruntusan dalam waktu cepat.', imageUrl: 'https://images.example.com/skintific_acne_serum.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 15, name: 'Skintific 2% Salicylic Acid Anti Acne Toner', description: 'Toner eksfoliasi lembut untuk membersihkan pori tersumbat.', imageUrl: 'https://images.example.com/skintific_acne_toner.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 16, name: 'Azarine Hydrasoothe Sunscreen Gel SPF45 PA++++', description: 'Tabir surya berbahan dasar air yang sangat ringan dan dingin di kulit.', imageUrl: 'https://images.example.com/azarine_sunscreen.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 17, name: 'Azarine Gentle Cleanse Micellar Water', description: 'Pembersih wajah tanpa bilas untuk mengangkat sisa kotoran dan makeup.', imageUrl: 'https://images.example.com/azarine_micellar.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 18, name: 'Wardah Crystal Secret Brightening Day Cream', description: 'Krim siang dengan kandungan Edelweiss Extract untuk kulit glowing.', imageUrl: 'https://images.example.com/wardah_day_cream.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 19, name: 'Wardah Lightening Liquid Foundation', description: 'Alas bedak cair ringan dengan SPF 30 PA+++ untuk penggunaan sehari-hari.', imageUrl: 'https://images.example.com/wardah_foundation.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 20, name: 'Wardah Acne Gentle Scrub', description: 'Pembersih muka dengan scrub halus untuk mencegah timbulnya jerawat.', imageUrl: 'https://images.example.com/wardah_scrub.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 21, name: 'The Originote Hyalucell Moisturizer', description: 'Pelembap berteknologi tinggi untuk menjaga elastisitas dan hidrasi kulit.', imageUrl: 'https://images.example.com/originote_moisturizer.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 22, name: 'The Originote Cicamide Facial Cleanser', description: 'Pembuat busa lembut dengan kandungan ceramide dan centella asiatica.', imageUrl: 'https://images.example.com/originote_cleanser.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 23, name: 'The Originote Acne B5 Serum', description: 'Serum khusus kulit berjerawat yang menenangkan kemerahan.', imageUrl: 'https://images.example.com/originote_acne_serum.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 24, name: 'Glad2Glow Centella Soothing Gel Moisturizer', description: 'Gel pelembap penyejuk kulit yang kemerahan akibat iritasi ringan.', imageUrl: 'https://images.example.com/g2g_cica.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 25, name: 'Glad2Glow Blueberry 5% Ceramide Moisturizer', description: 'Pelembap ekstrak buah blueberry untuk melembapkan sekaligus menutrisi barrier.', imageUrl: 'https://images.example.com/g2g_blueberry.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 26, name: 'Pyunkang Yul Essence Toner', description: 'Toner minimalis bebas air dengan ekstrak akar Astragalus untuk hidrasi prima.', imageUrl: 'https://images.example.com/pyunkang_toner.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 27, name: 'Anua Heartleaf 77 Soothing Toner', description: 'Toner viral asal Korea untuk menyeimbangkan pH dan meredakan jerawat meradang.', imageUrl: 'https://images.example.com/anua_toner.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 28, name: 'Cosrx Advanced Snail 96 Mucin Power Essence', description: 'Essence lendir siput untuk memperbaiki tekstur kulit dan memberikan kelembapan.', imageUrl: 'https://images.example.com/cosrx_snail.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 29, name: 'Cosrx Low pH Good Morning Gel Cleanser', description: 'Pembersih wajah legendaris ber-pH rendah yang tidak membuat kulit tertarik.', imageUrl: 'https://images.example.com/cosrx_cleanser.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 30, name: 'Cosrx Salicylic Acid Daily Gentle Cleanser', description: 'Pembersih wajah busa melimpah khusus untuk kulit berminyak dan berjerawat.', imageUrl: 'https://images.example.com/cosrx_salicylic.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 31, name: 'Avoskin Your Skin Bae Niacinamide 12%', description: 'Serum konsentrasi tinggi untuk mencerahkan dan memudarkan bekas jerawat.', imageUrl: 'https://images.example.com/avoskin_niacinamide.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 32, name: 'Avoskin Miraculous Refining Toner', description: 'Toner eksfoliasi AHA BHA PHA untuk mencerahkan dan menghaluskan kulit.', imageUrl: 'https://images.example.com/avoskin_toner.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 33, name: 'Emina Bright Stuff Moisturizing Cream', description: 'Krim pelembap remaja dengan ekstrak summer plum dan vitamin E.', imageUrl: 'https://images.example.com/emina_moist.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 34, name: 'Emina Sun Battle SPF 35 PA+++', description: 'Sunscreen ringan sehari-hari yang nyaman dipakai beraktivitas di luar ruangan.', imageUrl: 'https://images.example.com/emina_sun.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 35, name: 'Scarlett Whitening Brightly Ever After Serum', description: 'Serum dengan kandungan phyto whitening dan glutathione untuk kulit cerah merata.', imageUrl: 'https://images.example.com/scarlett_serum.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 36, name: 'Somethinc Calm Down Skinpair R-Ceramide Toner', description: 'Toner penenang kulit sensitif dengan ekstrak Madagascar Centella dan Ceramide.', imageUrl: 'https://images.example.com/somethinc_calm_toner.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 37, name: 'Skintific 360 Crystal Massager Eye Cream', description: 'Krim mata dengan aplikator getar crystal untuk mengurangi mata panda.', imageUrl: 'https://images.example.com/skintific_eye_cream.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 38, name: 'Wardah UV Shield Essential Sunscreen Gel SPF 30', description: 'Sunscreen gel ringan yang diperkaya vitamin E dan pro vitamin B5.', imageUrl: 'https://images.example.com/wardah_sunscreen.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 39, name: 'Azarine Hydration Booster Serum', description: 'Serum pelembap intensif dengan gabungan beberapa jenis hyaluronic acid.', imageUrl: 'https://images.example.com/azarine_booster.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 40, name: 'The Originote Retinol B3 Serum', description: 'Serum retinol terjangkau untuk melawan penuaan dini dan garis halus.', imageUrl: 'https://images.example.com/originote_retinol.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 41, name: 'Glad2Glow Yuja Revitalizing Glow Serum', description: 'Serum ekstrak buah yuja untuk menyegarkan dan mencerahkan kulit kusam.', imageUrl: 'https://images.example.com/g2g_yuja.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 42, name: 'Cosrx Centella Water Alcohol-Free Toner', description: 'Toner semprot penyegar wajah tanpa alkohol untuk meredakan kemerahan.', imageUrl: 'https://images.example.com/cosrx_cica_toner.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 43, name: 'Avoskin Advanced Action Shaping Serum', description: 'Serum anti-aging premium untuk menjaga kekencangan dan elastisitas kulit.', imageUrl: 'https://images.example.com/avoskin_aging.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 44, name: 'Emina Bright Stuff Face Wash', description: 'Pembersih muka pemula untuk membersihkan kotoran dan debu polusi.', imageUrl: 'https://images.example.com/emina_facewash.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 45, name: 'Scarlett Whitening Acne Serum', description: 'Serum khusus untuk merawat kulit berminyak dan berjerawat meradang.', imageUrl: 'https://images.example.com/scarlett_acne.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 46, name: 'Somethinc Diamond Phyto Stem Cell Serum', description: 'Serum mewah dengan ekstrak stem sel apel untuk kilau sebening berlian.', imageUrl: 'https://images.example.com/somethinc_diamond.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 47, name: 'Skintific Truetox Gentle Facial Wash', description: 'Facial wash dengan pH seimbang yang membersihkan tanpa membuat kulit kering.', imageUrl: 'https://images.example.com/skintific_wash.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 48, name: 'Wardah C-defense Energizing Creamy Wash', description: 'Pembersih wajah berbusa dengan kandungan antioxidant Hi-Grade Vitamin C.', imageUrl: 'https://images.example.com/wardah_vitc_wash.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 49, name: 'The Originote BHA Salicylic Acid Mugwort Acne Clay Mask', description: 'Masker lumpur pembersih pori dan perawat kulit berjerawat.', imageUrl: 'https://images.example.com/originote_claymask.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() },
      { id: 50, name: 'Cosrx BHA Blackhead Power Liquid', description: 'Cairan eksfoliasi BHA untuk membersihkan komedo hitam di area hidung.', imageUrl: 'https://images.example.com/cosrx_bha.jpg', adminId: null, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 3. Relasi Produk dan Ingredients (ProductIngredients Pivot Table)
    await queryInterface.bulkInsert('ProductIngredients', [
      { productId: 1, ingredientId: 1, createdAt: new Date(), updatedAt: new Date() },
      { productId: 1, ingredientId: 10, createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, ingredientId: 1, createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, ingredientId: 2, createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, ingredientId: 1, createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, ingredientId: 3, createdAt: new Date(), updatedAt: new Date() },
      { productId: 6, ingredientId: 2, createdAt: new Date(), updatedAt: new Date() },
      { productId: 7, ingredientId: 2, createdAt: new Date(), updatedAt: new Date() },
      { productId: 8, ingredientId: 7, createdAt: new Date(), updatedAt: new Date() },
      { productId: 9, ingredientId: 16, createdAt: new Date(), updatedAt: new Date() },
      { productId: 11, ingredientId: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 12, ingredientId: 12, createdAt: new Date(), updatedAt: new Date() },
      { productId: 14, ingredientId: 4, createdAt: new Date(), updatedAt: new Date() },
      { productId: 15, ingredientId: 4, createdAt: new Date(), updatedAt: new Date() },
      { productId: 21, ingredientId: 3, createdAt: new Date(), updatedAt: new Date() },
      { productId: 22, ingredientId: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 23, ingredientId: 4, createdAt: new Date(), updatedAt: new Date() },
      { productId: 24, ingredientId: 1, createdAt: new Date(), updatedAt: new Date() },
      { productId: 25, ingredientId: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 27, ingredientId: 19, createdAt: new Date(), updatedAt: new Date() },
      { productId: 28, ingredientId: 18, createdAt: new Date(), updatedAt: new Date() },
      { productId: 31, ingredientId: 2, createdAt: new Date(), updatedAt: new Date() },
      { productId: 32, ingredientId: 6, createdAt: new Date(), updatedAt: new Date() },
      { productId: 40, ingredientId: 7, createdAt: new Date(), updatedAt: new Date() },
      { productId: 45, ingredientId: 9, createdAt: new Date(), updatedAt: new Date() },
      { productId: 49, ingredientId: 4, createdAt: new Date(), updatedAt: new Date() },
      { productId: 49, ingredientId: 19, createdAt: new Date(), updatedAt: new Date() },
      { productId: 50, ingredientId: 4, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductIngredients', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};