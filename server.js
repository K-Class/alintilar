const express = require('express');
const app = express();
const port = 3000;

// Basit alıntılar listesi
const alinti = [{"id":1,"author":"Kur’ân-ı Kerîm, İsrâ Sûresi, Âyet: 17/111","quoteText":"Ve şöyle de:Hamd O Allâh’a ki, hiçbir çocuk edinmedi, mülkte ortağı yoktur, âciz olmayıp bir yardımcıya da ihtiyâcı yoktur. Tekbîr getirerek O’nu noksanlıklardan yücelt de yücelt. Kur’ân-ı Kerîm, İsrâ Sûresi, Âyet: 17/111","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.493865"},{"id":2,"author":"Kur’ân-ı Kerîm, Tâhâ (Tâ-Hâ) Sûresi, Âyet: 20/114","quoteText":"Gerçek hükümdâr olan Allâh yücedir. Sana vahyedilmesi tamamlanmadan önce Kur’ân-ı okumakta acele etme. “Rabbim! İlmimi arttır” de. Kur’ân-ı Kerîm, Tâhâ (Tâ-Hâ) Sûresi, Âyet: 20/114","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":3,"author":"Hadîs-i Şerîf, Hz. Muhammed (s.a.v.); Râvî: Hz. Esmâ (r.anhâ)","quoteText":"Benim Rabb’ım Allâh’tır. O’nâ hiçbir şeyi ortak koşmam. Hadîs-i Şerîf, Hz. Muhammed (s.a.v.); Râvî: Hz. Esmâ (r.anhâ)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":4,"author":"Hz. Ebû Bekir (r.a.)","quoteText":"Güzel, veciz konuşmanın sırrı; lüzumsuz, fuzûlî sözleri terk etmektir. Hz. Ebû Bekir (r.a.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":5,"author":"Hz. Ömer (r.a.)","quoteText":"Bir adamı yüzüne karşı övmek, onu boğazlamaktır. Hz. Ömer (r.a.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":6,"author":"Hz. Osman (r.a.)","quoteText":"Cehâlet öyle binektir ki, üzerine binen zelîl olur, arkadaşlık yapan yolunu kaybeder. Hz. Osman (r.a.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":7,"author":"Hz. Ali (k.v.)","quoteText":"Bin zulme uğrasan da bir zulüm yapma. Hz. Ali (k.v.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":8,"author":"Mevlânâ Celâleddîn-i Rûmî (rha.)","quoteText":"Bir mûm diğer bir mûmu tutuşturmakla ışığından bir şey kaybetmez. Mevlânâ Celâleddîn-i Rûmî (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":9,"author":"Benjamin Franklin","quoteText":"Bir çivi yüzünden bir nal, bir nal yüzünden bir ât, bir ât yüzünden de bir âtlı gidiverir. Benjamin Franklin","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":10,"author":"Prof. Dr. Mahmûd Es’ad Coşan (rha.)","quoteText":"Gülün dikenine değil, kokusuna ve rengine bakın. Prof. Dr. Mahmûd Es’ad Coşan (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":11,"author":"Mehmet Keçeci","quoteText":"Siyâsetle ilgilenmeyebilirsiniz fakat devleti yönetecek kadar veya yönetenlere ışık olacak kadar siyâseti de biliniz. Mehmet Keçeci","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":12,"author":"Ebû Bekir Ferrâ (rha.)","quoteText":"İyiliği gizlemek, kötülüğü gizlemekten daha üstündür. Ebû Bekir Ferrâ (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":13,"author":"İmâm-ı A’zam Ebû Hanîfe (rha.)","quoteText":"Bilmediklerimi ayağımın altına alsaydım başım göğe ererdi/değerdi. İmâm-ı A’zam Ebû Hanîfe Nu’mân b. Sâbit bin Zûtâ (Zevta) (bin Mâh) bin Merzubân (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":14,"author":"İbn-i Haldûn (rha.)","quoteText":"İnsan, alışkanlıklarının çocuğudur. İbn-i Haldûn (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":15,"author":"Firdevsî","quoteText":"Güzel söz söyleyen, kimseden kötü söz işitmez. Firdevsî","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":16,"author":"KâşgarlıMahmûd","quoteText":"Avcı nice al (tuzak, hîle) bilirse, ayı da onca yol bilir. KâşgarlıMahmûd","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":17,"author":"Yahya bin Muâz bin Ca’fer er-Râzî (rha.)","quoteText":"Birliğin kederi, ayrılığın sefâsından daha hayırlıdır. Yahya bin Muâz bin Ca’fer er-Râzî (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":18,"author":"Ca’fer bin Muhammed (rha.)","quoteText":"Bütün kötülüklerin anahtarı, hiddettir. Ca’fer bin Muhammed (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":19,"author":"Hz. Esmâ (r.anhâ)","quoteText":"Kesilmiş koyuna derisinin yüzülmesi elem vermez. Hz. Esmâ (r.anhâ)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":20,"author":"Hasan-ı Basri (rha.)","quoteText":"Güzel ahlâk; cömertlik, bağışlayıcılık, sabır ve tahammüldür. Hasan-ı Basri (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":21,"author":"Malcolm X","quoteText":"En iyi nasihât; iyi örnek olmaktır. Malcolm X","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":22,"author":"Hz. Hüseyin (r.a.)","quoteText":"Hayât, îmân ve cihâddır. Hz. Hüseyin (r.a.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":23,"author":"Şeyh Sa’dî-i Şîrâzî (rha.)","quoteText":"Hayatında ekmeği yenmeyen kimsenin adı, ölümünden sonra anılmaz. Şeyh Sa’dî-i Şîrâzî (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":24,"author":"Hz. Ali (r.a.)","quoteText":"Hiç kimse, diğer bir kimsenin kulu değildir. Hz. Ali (r.a.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":25,"author":"İmâm-ı Gazzâlî (rha.)","quoteText":"Uzun mesâfelere ulaşmak, yakın mesâfeleri aşmakla mümkündür. İmâm-ı Gazzâlî (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":26,"author":"II. Abdülhamîd Hân (rha.)","quoteText":"Târih değil, hatâlar tekerrür ediyor. II. Abdülhamîd Hân (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":27,"author":"Bâyezid-i Bestâmî (rha.)","quoteText":"Her kalbin çarpıntısı kendi ecelinin ayak sesleridir. Bâyezid-i Bestâmî (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":28,"author":"Hz. Ebû Bekir (r.a.)","quoteText":"Mal cimrilerde, silah korkaklarda, karar da zayıflarda olursa işler bozulur. Hz. Ebû Bekir (r.a.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":29,"author":"Hacı Bayrâm-ı Velî (rha.)","quoteText":"Kibir, bele bağlanmış taş gibidir.Onunla ne yüzülür ne de uçulur. Hacı Bayrâm-ı Velî (rha.)","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":30,"author":"Kore Özlü Sözü","quoteText":"Bıçak kendi sapını kesmez. Kore Özlü Sözü","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"},{"id":31,"author":"Türk Atasözü","quoteText":"Yarım hâkim maldan, yarım hekîm cândan, yarım hoca’da îmândan eder. Türk Atasözü","kaynak":null,"dataSet":"alintiSeti","book":null,"categories":"bilgi,liderlik,hayat,edebiyat,sevgi,din,aile","URL":null,"ISBN":null,"yzlLisan":"Turkish","orjLisan":null,"yzlTarihi":"2025-01-12T01:48:05.618412"}]
;

// /alinti endpoint'i
app.get('/alinti', (req, res) => {
  res.json(alinti);
});

// /alinti/random endpoint'i - Rastgele alıntı
app.get('/alinti/random', (req, res) => {
  const randomQuote = alinti[Math.floor(Math.random() * alinti.length)];
  res.json(randomQuote);
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu https://glitch.com/edit/#!/alintilar:${port} adresinde çalışıyor`);
});