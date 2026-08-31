// Ambil elemen list menu dan tag gambar
const menuItems = document.querySelectorAll('.menu-list li');
const gambarTampil = document.getElementById('gambar-tampil');

// Tambahkan event click ke setiap item menu
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Ambil nama file gambar dari atribut data-img
    const sumberGambar = this.getAttribute('data-img');
    
    // Ubah atribut src pada tag img
    gambarTampil.src = sumberGambar;
  });
});


let chipDragActive = false;
/* ---------------- DATA ---------------- */
const moves = [
  {
    id:"dhiet", name:"Dhiet (Tepuk Dada)", tag:"Bahu & Lengan",
    joint:"Sendi peluru (artikulasio humeri)",
    bone:"Humerus, skapula, klavikula",
    muscle:"Deltoid, pektoralis mayor, biseps–triseps brakii (antagonis)",
    desc:"Ciri paling khas Seudati: tepukan dada berirama tanpa alat musik. Gerak abduksi–adduksi lengan berulang ini ditopang sendi peluru bahu yang punya rentang gerak paling luas di tubuh manusia."
  },
  {
    id:"keutreb", name:"Keutreb Jaroe (Petik Jari)", tag:"Jari Tangan",
    joint:"Sendi engsel (artikulasio interfalangeal) & sendi pelana ibu jari",
    bone:"Falang proksimal, medial, distal serta tulang metakarpal",
    muscle:"Fleksor & ekstensor digitorum, otot lumbrikal dan interoseus tangan",
    desc:"Gerak memetik jari yang menghasilkan bunyi \"trep\" khas sebagai penanda ketukan. Bunyi ini muncul dari gesekan cepat antara ruas jari tengah dan ibu jari, dikendalikan otot-otot kecil tangan yang bekerja presisi pada sendi-sendi jari."
  },
  {
    id:"nyap", name:"Nyap (Membungkuk Maju)", tag:"Tulang Belakang",
    joint:"Sendi amfiartrosis antar-ruas vertebra",
    bone:"Ruas tulang belakang (vertebra) & diskus intervertebralis",
    muscle:"Erektor spina (ekstensor) vs rektus abdominis (fleksor)",
    desc:"Gerak membungkuk maju sebagai tanda hormat sekaligus perpindahan posisi barisan. Fleksi tulang belakang ke depan ini bergantung pada bantalan diskus di antara ruas vertebra serta kerja otot punggung dan perut yang saling berlawanan (antagonis)."
  },
  {
    id:"rheng", name:"Rheng (Memutar Tubuh)", tag:"Pinggul",
    joint:"Sendi peluru (artikulasio coxae)",
    bone:"Kaput femur & asetabulum tulang panggul",
    muscle:"Gluteus medius, otot obliquus abdominis",
    desc:"Gerak memutar tubuh yang menyatukan arah hadap seluruh barisan penari. Rotasi ini bertumpu pada sendi peluru panggul, dibantu stabilisasi otot bokong dan otot perut bagian samping."
  },
  {
    id:"geutham", name:"Geutham Gaki (Hentakan Kaki)", tag:"Lutut & Pergelangan Kaki",
    joint:"Sendi engsel (artikulasio genu & talokruralis)",
    bone:"Femur, tibia, fibula, tulang tarsal",
    muscle:"Kuadriseps femoris vs hamstring; gastroknemius–tibialis anterior",
    desc:"Hentakan kaki serentak yang menghasilkan bunyi ritmis pengganti alat musik. Sendi engsel lutut dan pergelangan kaki hanya bergerak satu bidang (fleksi–ekstensi), cocok untuk gerak hentak yang cepat dan tegas."
  }
];

const concepts = [
  {
    title:"Fungsi dan Jenis Tulang Penyusun Rangka",
    body:`<p>Sebelum masuk ke gerak Seudati, penting memahami peran rangka secara umum. Rangka manusia memiliki lima fungsi utama:</p>
    <ul>
      <li><strong>Penyokong tubuh</strong> — menopang berat dan bentuk tubuh.</li>
      <li><strong>Pelindung organ dalam</strong> — misalnya tengkorak melindungi otak, tulang rusuk melindungi jantung dan paru-paru.</li>
      <li><strong>Alat gerak pasif</strong> — bergerak karena ditarik otot yang melekat padanya.</li>
      <li><strong>Tempat penyimpanan mineral</strong> — terutama kalsium dan fosfat.</li>
      <li><strong>Hematopoiesis</strong> — pembentukan sel darah merah, putih, dan trombosit di sumsum tulang.</li>
    </ul>
    <p>Berdasarkan bentuknya, tulang diklasifikasikan menjadi <strong>tulang pipa</strong> (mis. humerus, femur), <strong>tulang pipih</strong> (mis. tulang tengkorak, tulang belikat), <strong>tulang pendek</strong> (mis. tulang pergelangan tangan/kaki), <strong>tulang tak beraturan</strong> (mis. ruas tulang belakang), dan <strong>tulang sesamoid</strong> (mis. tempurung lutut/patela).</p>`
  },
  {
    title:"Rangka: Aksial & Apendikular",
    body:`<p>Rangka manusia terbagi menjadi dua kelompok fungsional:</p>
    <ul>
      <li><strong>Rangka aksial</strong> — tengkorak, tulang belakang, dan tulang dada, menopang sumbu tubuh. Gerak <em>Nyap</em> paling banyak melibatkan bagian ini.</li>
      <li><strong>Rangka apendikular</strong> — tulang anggota gerak atas dan bawah beserta gelang bahu/panggul. Gerak <em>Dhiet</em>, <em>Keutreb Jaroe</em>, <em>Rheng</em>, dan <em>Geutham Gaki</em> bertumpu pada rangka apendikular.</li>
    </ul>`
  },
  {
    title:"Klasifikasi Sendi Berdasarkan Kemampuan Gerak",
    body:`<p>Berdasarkan luas rentang geraknya, sendi (artikulasio) dibedakan menjadi tiga kelompok besar:</p>
    <ul>
      <li><strong>Sinartrosis</strong> — sendi mati, tidak dapat digerakkan, dihubungkan jaringan ikat rapat atau tulang rawan. Contoh: sutura pada tulang tengkorak.</li>
      <li><strong>Amfiartrosis</strong> — sendi kaku, hanya memungkinkan gerak terbatas. Contoh: sendi antar-ruas tulang belakang, sendi antara tulang rusuk dan tulang dada.</li>
      <li><strong>Diartrosis</strong> — sendi gerak bebas, memiliki rongga sendi berisi cairan sinovial. Kelompok inilah yang memungkinkan variasi gerak tari, dengan beberapa tipe: sendi peluru, sendi engsel, sendi putar, sendi pelana, <strong>sendi luncur</strong> (mis. antar tulang pergelangan tangan), dan <strong>sendi kondiloid</strong> (mis. antara tulang pergelangan tangan dan tulang lengan bawah).</li>
    </ul>`
  },
  {
    title:"Jenis Jaringan Otot pada Tubuh Manusia",
    body:`<p>Tubuh manusia memiliki tiga jenis jaringan otot dengan struktur dan cara kerja berbeda:</p>
    <ul>
      <li><strong>Otot polos</strong> — sel berbentuk gelendong, tidak memiliki garis melintang (polos), bekerja involunter (di luar kesadaran), ditemukan pada dinding organ dalam seperti usus dan pembuluh darah.</li>
      <li><strong>Otot lurik (rangka)</strong> — sel berbentuk silindris panjang dengan garis melintang, bekerja volunter (disadari), melekat pada rangka dan bertanggung jawab atas seluruh gerak tari yang dipelajari di media ini.</li>
      <li><strong>Otot jantung</strong> — struktur bergaris mirip otot lurik namun bekerja involunter, hanya ditemukan pada dinding jantung, dengan sel yang bercabang dan saling terhubung agar berkontraksi serentak.</li>
    </ul>
    <p>Karena seluruh gerak Seudati — <em>Dhiet</em>, <em>Keutreb Jaroe</em>, <em>Nyap</em>, <em>Rheng</em>, dan <em>Geutham Gaki</em> — dilakukan secara sadar dan melekat pada rangka, otot yang berperan dalam kelima gerak tersebut seluruhnya adalah <strong>otot lurik</strong>.</p>`
  },
  {
    title:"Klasifikasi Sendi Berdasarkan Gerak Seudati",
    body:`<p>Kelima gerak inti Seudati mewakili beberapa tipe sendi diartrosis (sendi gerak bebas) yang berbeda:</p>
    <ul>
      <li><strong>Sendi peluru</strong> (bahu, panggul) — gerak ke segala arah, terlihat pada <em>Dhiet</em> dan <em>Rheng</em>.</li>
      <li><strong>Sendi engsel jari</strong> (interfalangeal) &amp; <strong>sendi pelana</strong> ibu jari — gerak presisi cepat, terlihat pada <em>Keutreb Jaroe</em>.</li>
      <li><strong>Sendi amfiartrosis</strong> antar-ruas vertebra — gerak fleksi terbatas, terlihat pada <em>Nyap</em>.</li>
      <li><strong>Sendi engsel</strong> (lutut, pergelangan kaki) — gerak satu bidang, terlihat pada <em>Geutham Gaki</em>.</li>
    </ul>`
  },
  {
    title:"Mekanisme Kontraksi Otot Rangka",
    body:`<p>Setiap tepukan dan hentakan bergantung pada mekanisme filamen bergeser (sliding filament): aktin dan miosin saling menarik memendekkan sarkomer saat otot berkontraksi, dipicu ion kalsium dan energi ATP.</p>
    <p>Karena otot hanya bisa menarik (berkontraksi), gerak berlawanan arah — misalnya menekuk dan meluruskan lutut pada gerak <em>Geutham Gaki</em> — memerlukan pasangan otot antagonis yang bekerja bergantian.</p>`
  },
  {
    title:"Gerak Sinergis-Antagonis dalam Satu Rangkaian Tari",
    body:`<p>Keselarasan Seudati sebenarnya adalah keselarasan otot antagonis yang diatur presisi: saat otot fleksor memendek, otot ekstensor pasangannya memanjang secara terkendali, bukan sekadar mengendur. Koordinasi inilah yang membuat belasan penari bisa tepat serentak tanpa hitungan musik — mereka mengandalkan proprioseptif, kepekaan tubuh terhadap posisi sendi dan ototnya sendiri.</p>`
  }
];

const quiz = [
  {
    dim:"Memahami Masalah (Exploring & Understanding)",
    prompt:"Seorang penari Seudati mengeluh nyeri berulang pada bahu setelah rangkaian gerak Dhiet (tepuk dada) yang dilakukan puluhan kali tanpa jeda. Struktur manakah yang paling mungkin mengalami kelelahan berlebih?",
    options:[
      "Sendi engsel lutut, karena menahan beban tubuh",
      "Sendi peluru bahu beserta otot deltoid dan pektoralis mayor yang bekerja repetitif",
      "Sendi interfalangeal jari, karena posisi tangan menunduk",
      "Tulang tengkorak, karena getaran tepukan menjalar ke kepala"
    ], answer:1,
    explain:"Gerak Dhiet berulang membebani sendi peluru bahu dan otot penggeraknya (deltoid, pektoralis mayor) secara repetitif — pola cedera overuse yang umum pada gerak abduksi-adduksi berulang."
  },
  {
    dim:"Memahami Masalah (Exploring & Understanding)",
    prompt:"Seorang mahasiswa mengamati bahwa bahu dapat digerakkan ke segala arah saat Dhiet, sedangkan lutut hanya dapat menekuk dan meluruskan satu bidang saat Geutham Gaki. Apa yang mendasari perbedaan rentang gerak ini?",
    options:[
      "Perbedaan ukuran otot yang menggerakkan kedua sendi",
      "Perbedaan tipe sendi: sendi peluru di bahu memungkinkan gerak segala arah, sedangkan sendi engsel di lutut hanya memungkinkan gerak satu bidang",
      "Perbedaan jumlah tulang penyusun kedua sendi",
      "Perbedaan jenis jaringan ikat pada kedua area tubuh"
    ], answer:1,
    explain:"Perbedaan rentang gerak ditentukan oleh struktur sendinya, bukan ukuran otot: sendi peluru (bahu) memiliki bonggol dan rongga yang memungkinkan gerak ke segala arah, sedangkan sendi engsel (lutut) hanya memungkinkan gerak satu bidang seperti engsel pintu."
  },
  {
    dim:"Merepresentasikan Masalah (Representing & Formulating)",
    prompt:"Jika seorang penari mengalami keterbatasan gerak akibat kekakuan pada sendi interfalangeal (ruas jari) dan sendi pelana ibu jari, gerak Seudati manakah yang paling terdampak?",
    options:[
      "Geutham Gaki (hentakan kaki)",
      "Rheng (memutar tubuh)",
      "Keutreb Jaroe (petik jari)",
      "Dhiet (tepuk dada)"
    ], answer:2,
    explain:"Sendi interfalangeal dan sendi pelana ibu jari adalah sendi utama yang memungkinkan gerak memetik jari secara cepat dan presisi, sehingga gangguan di sana langsung berdampak pada gerak Keutreb Jaroe."
  },
  {
    dim:"Merepresentasikan Masalah (Representing & Formulating)",
    prompt:"Seorang peneliti ingin memetakan hubungan antara gerak Nyap (membungkuk maju) dengan jenis sendi yang berperan. Pasangan manakah yang paling tepat merepresentasikan hubungan tersebut?",
    options:[
      "Nyap — sendi peluru, karena melibatkan gerak ke segala arah",
      "Nyap — sendi putar, karena melibatkan rotasi sumbu tubuh",
      "Nyap — sendi amfiartrosis antar-ruas vertebra, karena gerak fleksi tulang belakang bersifat terbatas",
      "Nyap — sendi engsel, karena hanya melibatkan otot betis"
    ], answer:2,
    explain:"Nyap adalah gerak menekuk tulang belakang ke depan. Gerak ini terjadi pada sendi amfiartrosis antar-ruas vertebra, yang secara alami hanya memungkinkan fleksi terbatas — bukan gerak bebas segala arah seperti sendi peluru."
  },
  {
    dim:"Merancang Solusi (Planning & Executing)",
    prompt:"Untuk mencegah cedera otot antagonis pada gerak Nyap (membungkuk maju berulang), strategi pemanasan manakah yang paling tepat secara anatomis?",
    options:[
      "Peregangan hanya pada otot perut (rektus abdominis) saja",
      "Peregangan berimbang pada erektor spina dan rektus abdominis sebagai pasangan antagonis",
      "Peregangan hanya pada otot betis (gastroknemius)",
      "Melewati pemanasan karena gerak Nyap tidak melibatkan otot besar"
    ], answer:1,
    explain:"Karena Nyap melibatkan pasangan otot antagonis (erektor spina vs rektus abdominis), pemanasan yang tepat harus menyasar keduanya secara berimbang agar tidak ada satu sisi yang tertinggal fleksibilitasnya."
  },
  {
    dim:"Merancang Solusi (Planning & Executing)",
    prompt:"Seorang pelatih ingin menyusun urutan pemanasan sebelum latihan Seudati agar mencakup seluruh gerak inti (Dhiet, Keutreb Jaroe, Nyap, Rheng, Geutham Gaki). Rancangan manakah yang paling tepat?",
    options:[
      "Cukup meregangkan otot tungkai karena menopang seluruh gerakan tari",
      "Peregangan menyeluruh yang mencakup bahu, jari tangan, tulang belakang, panggul, dan tungkai secara berurutan",
      "Peregangan difokuskan hanya pada leher karena mengatur keseimbangan tubuh",
      "Pemanasan dapat dilewati karena durasi tari tergolong singkat"
    ], answer:1,
    explain:"Karena kelima gerak inti melibatkan kelompok sendi dan otot yang berbeda-beda (bahu, jari, tulang belakang, panggul, tungkai), rancangan pemanasan yang tepat harus menyeluruh dan sistematis, bukan berfokus pada satu bagian tubuh saja."
  },
  {
    dim:"Memantau & Mengevaluasi (Monitoring & Reflecting)",
    prompt:"Setelah mempelajari kelima gerak inti Seudati, kesimpulan manakah yang paling tepat menggambarkan hubungan antara variasi gerak tari dan variasi jenis sendi?",
    options:[
      "Semua gerak tari menggunakan jenis sendi yang sama, hanya berbeda kecepatan",
      "Variasi gerak tari muncul karena tubuh memiliki beberapa tipe sendi dengan arah dan rentang gerak berbeda, yang dipilih sesuai kebutuhan ekspresi gerak",
      "Jenis sendi tidak berpengaruh pada bentuk gerak tari, yang menentukan hanya kekuatan otot",
      "Gerak tari tradisional tidak dapat dijelaskan melalui konsep anatomi"
    ], answer:1,
    explain:"Kesimpulan yang tepat menegaskan bahwa keragaman estetika gerak Seudati justru lahir dari keragaman fungsi sendi (peluru, putar, engsel) yang masing-masing punya arah dan rentang gerak berbeda — bukti bahwa seni gerak dan struktur anatomi saling membentuk."
  },
  {
    dim:"Memantau & Mengevaluasi (Monitoring & Reflecting)",
    prompt:"Seorang mahasiswa menyimpulkan bahwa \"gerak tari tradisional hanya melibatkan otot-otot besar seperti pada bahu dan tungkai\". Berdasarkan gerak Keutreb Jaroe yang telah dipelajari, bagaimana evaluasi paling tepat terhadap kesimpulan tersebut?",
    options:[
      "Kesimpulan tersebut benar, karena otot besar mendominasi seluruh rangkaian gerak tari",
      "Kesimpulan tersebut kurang tepat, karena Keutreb Jaroe menunjukkan otot-otot kecil pada jari tangan turut berperan penting dalam presisi gerak tari",
      "Kesimpulan tersebut tidak dapat dievaluasi karena otot jari bukan bagian dari sistem gerak manusia",
      "Kesimpulan tersebut benar karena Keutreb Jaroe bukan termasuk gerak inti Seudati"
    ], answer:1,
    explain:"Gerak Keutreb Jaroe justru membuktikan sebaliknya: otot-otot kecil pada jari tangan (fleksor-ekstensor digitorum, lumbrikal, interoseus) berperan penting dalam menghasilkan gerak presisi, sehingga kesimpulan yang menyamaratakan seluruh gerak tari pada otot besar perlu direvisi."
  }
];

/* ---------------- RENDER: move list ---------------- */
const moveList = document.getElementById('moveList');
moves.forEach((m,i)=>{
  const el = document.createElement('div');
  el.className = 'move-item';
  el.dataset.move = m.id;
  el.innerHTML = `
    <div class="m-head">
      <h4>${m.name}</h4>
      <span class="tag">${m.tag}</span>
    </div>
    <div class="move-detail">
      <p class="desc">${m.desc}</p>
      <div class="grid2">
        <div class="concept-chip"><div class="k">Sendi</div><div class="v">${m.joint}</div></div>
        <div class="concept-chip"><div class="k">Tulang</div><div class="v">${m.bone}</div></div>
        <div class="concept-chip"><div class="k">Otot</div><div class="v">${m.muscle}</div></div>
      </div>
    </div>`;
  el.addEventListener('click', ()=> toggleMove(m.id));
  moveList.appendChild(el);
});

function toggleMove(id, fromFigure){
  const items = document.querySelectorAll('.move-item');
  const hotspots = document.querySelectorAll('.hotspot');
  const already = document.querySelector(`.move-item[data-move="${id}"]`).classList.contains('active');
  items.forEach(it=>it.classList.remove('active'));
  hotspots.forEach(h=>h.classList.remove('active'));
  if(!already){
    document.querySelector(`.move-item[data-move="${id}"]`).classList.add('active');
    document.querySelectorAll(`.hotspot[data-move="${id}"]`).forEach(h=>h.classList.add('active'));
    if(!fromFigure){
      document.querySelector(`.move-item[data-move="${id}"]`).scrollIntoView({behavior:'smooth', block:'nearest'});
    }
  }
}
document.querySelectorAll('.hotspot').forEach(h=>{
  h.addEventListener('click', ()=> toggleMove(h.dataset.move, true));
  h.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); toggleMove(h.dataset.move, true);} });
});

/* ---------------- RENDER: accordion ---------------- */
const accordion = document.getElementById('accordion');
concepts.forEach((c,i)=>{
  const item = document.createElement('div');
  item.className = 'acc-item';
  item.innerHTML = `
    <button class="acc-trigger">${c.title}<span class="plus">+</span></button>
    <div class="acc-panel"><div class="acc-panel-inner">${c.body}</div></div>`;
  const trigger = item.querySelector('.acc-trigger');
  const panel = item.querySelector('.acc-panel');
  trigger.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(a=>{a.classList.remove('open'); a.querySelector('.acc-panel').style.maxHeight=null;});
    if(!isOpen){
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
  accordion.appendChild(item);
});

/* ---------------- QUIZ LOGIC ---------------- */
let qIndex = 0;
let score = 0;
const quizBody = document.getElementById('quizBody');
const quizMeta = document.getElementById('quizMeta');
const quizProgress = document.getElementById('quizProgress');
const resultCard = document.getElementById('resultCard');

function renderQuiz(){
  quizBody.innerHTML = '';
  resultCard.classList.remove('show');
  quiz.forEach((q,i)=>{
    const card = document.createElement('div');
    card.className = 'q-card' + (i===0 ? ' show' : '');
    card.dataset.index = i;
    card.innerHTML = `
      <div class="q-dim">${q.dim}</div>
      <div class="q-prompt">${q.prompt}</div>
      <div class="q-options">
        ${q.options.map((opt,oi)=>`<button class="q-opt" data-oi="${oi}">${opt}</button>`).join('')}
      </div>
      <div class="q-explain">${q.explain}</div>
      <div class="q-nav"><button class="btn solid next-btn" disabled>Lanjut →</button></div>
    `;
    quizBody.appendChild(card);

    const opts = card.querySelectorAll('.q-opt');
    const explain = card.querySelector('.q-explain');
    const nextBtn = card.querySelector('.next-btn');
    opts.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        if(btn.disabled) return;
        const oi = parseInt(btn.dataset.oi);
        opts.forEach(b=>b.disabled=true);
        if(oi === q.answer){
          btn.classList.add('correct');
          score++;
        } else {
          btn.classList.add('wrong');
          opts[q.answer].classList.add('correct');
        }
        explain.classList.add('show');
        nextBtn.disabled = false;
      });
    });
    nextBtn.addEventListener('click', ()=>{
      qIndex++;
      updateQuizNav();
    });
  });
  updateQuizNav();
}

function updateQuizNav(){
  const cards = document.querySelectorAll('.q-card');
  cards.forEach((c,i)=> c.classList.toggle('show', i===qIndex));
  if(qIndex < quiz.length){
    quizMeta.textContent = `Soal ${qIndex+1} dari ${quiz.length}`;
    quizProgress.style.width = (qIndex/quiz.length*100) + '%';
  } else {
    quizProgress.style.width = '100%';
    quizMeta.textContent = 'Selesai';
    showResult();
  }
}

function showResult(){
  quizBody.style.display = 'none';
  resultCard.classList.add('show');
  document.getElementById('resultScore').textContent = `${score}/${quiz.length}`;
  let band, note;
  if(score >= 7){ band = 'Sangat Baik'; note = 'Kamu mampu menghubungkan struktur sendi, otot, dan gerak tari secara konsisten di keempat dimensi pemecahan masalah kompleks (CPS).'; }
  else if(score >= 5){ band = 'Baik'; note = 'Pemahamanmu sudah kuat pada sebagian besar dimensi CPS — coba tinjau kembali penjelasan pada soal yang terlewat.'; }
  else if(score >= 3){ band = 'Cukup'; note = 'Kamu memahami konsep dasar, namun perlu memperdalam kaitan antara jenis sendi, otot, dan bentuk gerak tari pada dimensi yang belum tepat.'; }
  else { band = 'Perlu Bimbingan'; note = 'Coba pelajari kembali tahap Eksplorasi dan Elaborasi sebelum mengulang uji pemahaman ini.'; }
  document.getElementById('resultBand').textContent = band;
  document.getElementById('resultNote').textContent = note;
}

function resetQuiz(){
  qIndex = 0; score = 0;
  quizBody.style.display = 'block';
  renderQuiz();
}
renderQuiz();

/* ---------------- DRAG & DROP MATCHING (generic factory) ---------------- */
function shuffleArr(arr){
  return arr.map(v=>({v, r:Math.random()})).sort((a,b)=>a.r-b.r).map(o=>o.v);
}

function createMatchWidget({pairs, trayId, gridId, progressId, doneId, resetId, renderChipContent, renderZoneContent, extraChipClass}){
  const tray = document.getElementById(trayId);
  const grid = document.getElementById(gridId);
  const progressEl = document.getElementById(progressId);
  const doneEl = document.getElementById(doneId);
  const resetBtn = document.getElementById(resetId);
  let matchedCount = 0;

  function updateProgress(){
    progressEl.textContent = `${matchedCount} / ${pairs.length} tercocok`;
  }

  function attachChipDrag(chip){
    chip.addEventListener('pointerdown', (e)=>{
      if(chip.classList.contains('locked')) return;
      e.stopPropagation();
      chipDragActive = true;
      chip.classList.add('dragging');
      chip.setPointerCapture(e.pointerId);
      chip._sx = e.clientX; chip._sy = e.clientY;
      chip._dx = 0; chip._dy = 0;
    });

    chip.addEventListener('pointermove', (e)=>{
      if(!chip.classList.contains('dragging')) return;
      e.stopPropagation();
      chip._dx = e.clientX - chip._sx;
      chip._dy = e.clientY - chip._sy;
      chip.style.transform = `translate(${chip._dx}px, ${chip._dy}px)`;
    });

    function finishDrag(e){
      if(!chip.classList.contains('dragging')) return;
      e.stopPropagation();
      chip.classList.remove('dragging');
      chipDragActive = false;

      chip.style.pointerEvents = 'none';
      const under = document.elementFromPoint(e.clientX, e.clientY);
      chip.style.pointerEvents = '';
      const zone = under ? under.closest('.drop-zone') : null;
      chip.style.transform = '';

      if(zone && zone.closest(`#${grid.id}`) && !zone.classList.contains('filled')){
        if(zone.dataset.move === chip.dataset.move){
          zone.appendChild(chip);
          chip.classList.add('locked','correct');
          zone.classList.add('filled','correct');
          matchedCount++;
          updateProgress();
          if(matchedCount === pairs.length){
            doneEl.classList.add('show');
          }
          return;
        } else {
          zone.classList.add('shake');
          setTimeout(()=> zone.classList.remove('shake'), 400);
        }
      }
      tray.appendChild(chip);
    }

    chip.addEventListener('pointerup', finishDrag);
    chip.addEventListener('pointercancel', finishDrag);
  }

  function render(){
    tray.innerHTML = '';
    grid.innerHTML = '';
    matchedCount = 0;
    updateProgress();
    doneEl.classList.remove('show');

    shuffleArr(pairs).forEach(p=>{
      const chip = document.createElement('div');
      chip.className = extraChipClass ? `drag-chip ${extraChipClass}` : 'drag-chip';
      chip.dataset.move = p.id;
      chip.innerHTML = renderChipContent(p);
      attachChipDrag(chip);
      tray.appendChild(chip);
    });

    shuffleArr(pairs).forEach(p=>{
      const zone = document.createElement('div');
      zone.className = 'drop-zone';
      zone.dataset.move = p.id;
      zone.innerHTML = renderZoneContent(p);
      grid.appendChild(zone);
    });
  }

  resetBtn.addEventListener('click', render);
  render();
}

/* Bagian 2 — gerak → deskripsi jenis sendi */
const matchPairs = [
  {id:"dhiet",    label:"Dhiet",         target:"Sendi Peluru Bahu"},
  {id:"keutreb",  label:"Keutreb Jaroe", target:"Sendi Engsel Jari & Sendi Pelana Ibu Jari"},
  {id:"nyap",     label:"Nyap",          target:"Sendi Amfiartrosis Antar-Ruas Vertebra"},
  {id:"rheng",    label:"Rheng",         target:"Sendi Peluru Panggul"},
  {id:"geutham",  label:"Geutham Gaki",  target:"Sendi Engsel Lutut & Pergelangan Kaki"}
];

createMatchWidget({
  pairs: matchPairs,
  trayId: 'chipTray', gridId: 'dropGrid', progressId: 'matchProgress',
  doneId: 'matchDone', resetId: 'matchResetBtn',
  renderChipContent: p => p.label,
  renderZoneContent: p => `<span>${p.target}</span>`
});

/* Bagian 3 — gambar tulang → nama gerakan */
const boneIcons = {
  dhiet: `<svg viewBox="0 0 70 30" width="46" height="20" aria-hidden="true">
    <rect x="20" y="12" width="30" height="6" rx="3" fill="#e6c878"/>
    <circle cx="14" cy="10" r="7" fill="#e6c878"/><circle cx="14" cy="20" r="7" fill="#e6c878"/>
    <circle cx="56" cy="10" r="7" fill="#e6c878"/><circle cx="56" cy="20" r="7" fill="#e6c878"/>
  </svg>`,
  keutreb: `<svg viewBox="0 0 70 30" width="46" height="20" aria-hidden="true">
    <g>
      <rect x="4" y="10" width="12" height="4" rx="2" fill="#e6c878"/><circle cx="3" cy="12" r="4" fill="#e6c878"/><circle cx="17" cy="12" r="4" fill="#e6c878"/>
      <rect x="26" y="10" width="12" height="4" rx="2" fill="#e6c878"/><circle cx="25" cy="12" r="4" fill="#e6c878"/><circle cx="39" cy="12" r="4" fill="#e6c878"/>
      <rect x="48" y="10" width="12" height="4" rx="2" fill="#e6c878"/><circle cx="47" cy="12" r="4" fill="#e6c878"/><circle cx="61" cy="12" r="4" fill="#e6c878"/>
    </g>
  </svg>`,
  nyap: `<svg viewBox="0 0 30 30" width="20" height="20" aria-hidden="true">
    <ellipse cx="15" cy="4" rx="12" ry="4" fill="#e6c878"/>
    <ellipse cx="15" cy="12" rx="12" ry="4" fill="#e6c878"/>
    <ellipse cx="15" cy="20" rx="12" ry="4" fill="#e6c878"/>
    <ellipse cx="15" cy="28" rx="12" ry="4" fill="#e6c878"/>
  </svg>`,
  rheng: `<svg viewBox="0 0 70 40" width="46" height="26" aria-hidden="true">
    <path d="M4 14 A14 14 0 0 1 24 8" stroke="#c4665c" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="20" cy="20" r="8" fill="#e6c878"/>
    <rect x="26" y="17" width="28" height="6" rx="3" fill="#e6c878"/>
    <circle cx="58" cy="14" r="7" fill="#e6c878"/><circle cx="58" cy="26" r="7" fill="#e6c878"/>
  </svg>`,
  geutham: `<svg viewBox="0 0 60 60" width="34" height="34" aria-hidden="true">
    <rect x="6" y="4" width="8" height="26" rx="4" fill="#e6c878" transform="rotate(-8 10 17)"/>
    <circle cx="9" cy="6" r="7" fill="#e6c878"/>
    <circle cx="17" cy="30" r="7" fill="#c4665c"/>
    <rect x="18" y="32" width="8" height="24" rx="4" fill="#e6c878" transform="rotate(10 22 44)"/>
    <circle cx="26" cy="54" r="7" fill="#e6c878"/>
  </svg>`
};

const boneMatchPairs = [
  {id:"dhiet",    boneName:"Humerus & Skapula (Tulang Lengan Atas &amp; Belikat)"},
  {id:"keutreb",  boneName:"Falang (Ruas Tulang Jari)"},
  {id:"nyap",     boneName:"Vertebra (Ruas Tulang Belakang)"},
  {id:"rheng",    boneName:"Femur &amp; Tulang Panggul (Asetabulum)"},
  {id:"geutham",  boneName:"Femur, Tibia &amp; Fibula (Tulang Tungkai)"}
];

const moveLabelById = {dhiet:"Dhiet", keutreb:"Keutreb Jaroe", nyap:"Nyap", rheng:"Rheng", geutham:"Geutham Gaki"};

createMatchWidget({
  pairs: boneMatchPairs,
  trayId: 'boneChipTray', gridId: 'boneDropGrid', progressId: 'boneMatchProgress',
  doneId: 'boneMatchDone', resetId: 'boneMatchResetBtn',
  extraChipClass: 'bone-chip',
  renderChipContent: p => `<span class="bone-icon">${boneIcons[p.id]}</span><span class="bone-label">${p.boneName}</span>`,
  renderZoneContent: p => `<span>${moveLabelById[p.id]}</span>`
});

/* ---------------- SLIDE NAVIGATION ---------------- */
const slideIds = ['hero','peta','orientasi','eksplorasi','elaborasi','evaluasi'];
const slidesTrack = document.getElementById('slidesTrack');
const slidesViewport = document.getElementById('slidesViewport');
const railButtons = document.querySelectorAll('.rail button');
const dotButtons = document.querySelectorAll('.dots-mobile button');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const swipeHint = document.getElementById('swipeHint');
let currentSlide = 0;

function applySlidePosition(animate){
  slidesTrack.style.transition = animate === false ? 'none' : '';
  slidesTrack.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function updateIndicators(){
  railButtons.forEach((b,i)=> b.classList.toggle('active', i===currentSlide));
  dotButtons.forEach((b,i)=> b.classList.toggle('active', i===currentSlide));
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slideIds.length - 1;
}

function goToSlide(idx){
  currentSlide = Math.max(0, Math.min(slideIds.length - 1, idx));
  applySlidePosition();
  updateIndicators();
  if(swipeHint) swipeHint.style.opacity = '0';
}

railButtons.forEach((b,i)=> b.addEventListener('click', ()=> goToSlide(i)));
dotButtons.forEach((b,i)=> b.addEventListener('click', ()=> goToSlide(i)));
prevBtn.addEventListener('click', ()=> goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', ()=> goToSlide(currentSlide + 1));

document.querySelectorAll('.cta-row a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const idx = slideIds.indexOf(a.getAttribute('href').slice(1));
    if(idx > -1) goToSlide(idx);
  });
});

document.addEventListener('keydown', (e)=>{
  const tag = (e.target.tagName || '').toLowerCase();
  if(tag === 'input' || tag === 'textarea') return;
  if(e.key === 'ArrowRight') goToSlide(currentSlide + 1);
  if(e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
});

/* pointer-based swipe / drag (touch + mouse + pen unified) */
let pointerDown = false, dragMode = false, startX = 0, startY = 0, dragDeltaX = 0;
const DRAG_ACTIVATE_PX = 10;

slidesViewport.addEventListener('pointerdown', (e)=>{
  if(chipDragActive) return;
  pointerDown = true; dragMode = false; startX = e.clientX; startY = e.clientY; dragDeltaX = 0;
});

slidesViewport.addEventListener('pointermove', (e)=>{
  if(!pointerDown || chipDragActive) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  if(!dragMode){
    if(Math.abs(dx) > DRAG_ACTIVATE_PX && Math.abs(dx) > Math.abs(dy)){
      dragMode = true;
      slidesTrack.style.transition = 'none';
    } else if(Math.abs(dy) > DRAG_ACTIVATE_PX){
      pointerDown = false; // vertical scroll takes over, abandon drag tracking
      return;
    }
  }
  if(dragMode){
    dragDeltaX = dx;
    const basePx = -currentSlide * window.innerWidth;
    slidesTrack.style.transform = `translateX(${basePx + dx}px)`;
  }
});

function endPointerDrag(){
  if(!pointerDown) return;
  pointerDown = false;
  if(dragMode){
    slidesTrack.style.transition = '';
    const threshold = window.innerWidth * 0.15;
    if(dragDeltaX < -threshold) goToSlide(currentSlide + 1);
    else if(dragDeltaX > threshold) goToSlide(currentSlide - 1);
    else applySlidePosition();
  }
  dragMode = false;
}
slidesViewport.addEventListener('pointerup', endPointerDrag);
slidesViewport.addEventListener('pointercancel', endPointerDrag);
slidesViewport.addEventListener('pointerleave', endPointerDrag);

window.addEventListener('resize', ()=> applySlidePosition(false));

applySlidePosition(false);
updateIndicators();


/* ---------------- LOGIN GATE ---------------- */
const loginGate = document.getElementById('loginGate');
const loginForm = document.getElementById('loginForm');
const inputNama = document.getElementById('inputNama');
const inputNim = document.getElementById('inputNim');
const loginError = document.getElementById('loginError');
const sessionBadge = document.getElementById('sessionBadge');
const badgeName = document.getElementById('badgeName');
const badgeNim = document.getElementById('badgeNim');
const badgeInitial = document.getElementById('badgeInitial');
const logoutBtn = document.getElementById('logoutBtn');

document.body.style.overflow = 'hidden';

loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const nama = inputNama.value.trim();
  const nim = inputNim.value.trim();
  if(!nama || !nim){
    loginError.classList.add('show');
    return;
  }
  loginError.classList.remove('show');
  badgeName.textContent = nama;
  badgeNim.textContent = 'NIM ' + nim;
  badgeInitial.textContent = nama.charAt(0).toUpperCase();
  sessionBadge.classList.add('show');
  loginGate.classList.add('hidden');
  document.body.style.overflow = '';
});

logoutBtn.addEventListener('click', ()=>{
  sessionBadge.classList.remove('show');
  inputNama.value = '';
  inputNim.value = '';
  loginGate.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  window.scrollTo({top:0, behavior:'smooth'});
});
