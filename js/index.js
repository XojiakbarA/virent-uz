new fullpage("#fullpage", {
    anchors: ["home", "about", "whyvirent", "contact", "downloadapp"],
    credits: {enabled: false, label: ""}
})

function setLanguage() {
    const el = document.getElementById("langSelect")
    localStorage.setItem("lang", el.value)
    changeLanguage()
}

function changeLanguage() {
    const el = document.getElementById("langSelect")
    for (let i = 0; i < el.options.length; i++) {
        if (el.options[i].value === localStorage.getItem("lang")) {
            el.options[i].selected = true
        }
    }
    const about = document.getElementsByClassName("about")
    const whyvirent = document.getElementsByClassName("whyvirent")
    const contacts = document.getElementsByClassName("contacts")
    const downloadapp = document.getElementsByClassName("downloadapp")
    const homeTitle = document.getElementsByClassName("homeTitle")
    const homeSubtitle = document.getElementsByClassName("homeSubtitle")
    const whoarewe = document.getElementsByClassName("whoarewe")
    const whoareweDesc = document.getElementsByClassName("whoareweDesc")
    const whatwedo = document.getElementsByClassName("whatwedo")
    const whatwedoDesc = document.getElementsByClassName("whatwedoDesc")
    const virentDesc = document.getElementsByClassName("virentDesc")
    const safetyFirst = document.getElementsByClassName("safetyFirst")
    const safetyFirstDesc = document.getElementsByClassName("safetyFirstDesc")
    const sustainability = document.getElementsByClassName("sustainability")
    const sustainabilityDesc = document.getElementsByClassName("sustainabilityDesc")
    const greenchoice = document.getElementsByClassName("greenchoice")
    const greenchoiceDesc = document.getElementsByClassName("greenchoiceDesc")
    const terms = document.getElementsByClassName("terms")
    
    switch (localStorage.getItem("lang")) {
        case "en":
            about[0].innerHTML = "About"
            whyvirent[0].innerHTML = "Why ViRent?"
            contacts[0].innerHTML = "Contacts"
            contacts[1].innerHTML = "Contacts"
            downloadapp[0].innerHTML = "Download App"
            homeTitle[0].innerHTML = "Choose the best!"
            homeSubtitle[0].innerHTML = "ViRent is one of the first electric scooter sharing (rental) companies in Uzbekistan."
            whoarewe[0].innerHTML = "Who Are We?"
            whoareweDesc[0].innerHTML = "ViRent is one of the first electric scooter sharing (rental) companies in Uzbekistan. We are committed to building a future where transportation is shared, affordable and environmentally friendly."
            whatwedo[0].innerHTML = "What we do?"
            whatwedoDesc[0].innerHTML = "We provide convenient and reliable short-term rental of electric scooters at an affordable price in major cities of Uzbekistan."
            virentDesc[0].innerHTML = "ViRent is one of the first electric scooter sharing (rental) companies in Uzbekistan. Our unparalleled experience, high quality equipment and commitment to operational excellence is why cities and users consistently choose us to get them where they need to be. With us you will overcome any traffic jams, saving a lot of time on the trip. And time is money!"
            safetyFirst[0].innerHTML = "Safety first."
            safetyFirstDesc[0].innerHTML = "Safety comes first and always at ViRent. It defines how we design and upgrade our vehicles, develop driver training and education, and work with cities to improve how streets are built to prioritize people over cars."
            sustainability[0].innerHTML = "Sustainability."
            sustainabilityDesc[0].innerHTML = "Everywhere 'Green' with ViRent. Transport is the second largest contributor to global toxic gas emissions, mainly due to driving. To tackle climate change and make cities healthier and more livable, we need to develop urban transport towards a shared, electric and carbon-free future. Electric shared micromobility could be one of the most sustainable modes of transport in the world, replacing all car journeys of less than 10 kilometers. This is our goal."
            greenchoice[0].innerHTML = "'Green' choice."
            greenchoiceDesc[0].innerHTML = "ViRent ride uses 75% less carbon than a comparable car ride, and since every vehicle is powered by renewable energy, choosing ViRent over cars is always the right choice."
            terms[0].innerHTML = "Terms of public offer:"
            break
        case "ru":
            about[0].innerHTML = "О нас"
            whyvirent[0].innerHTML = "Почему ViRent?"
            contacts[0].innerHTML = "Контакты"
            contacts[1].innerHTML = "Контакты"
            downloadapp[0].innerHTML = "Скачать приложение"
            homeTitle[0].innerHTML = "Выбирайте лучшее!"
            homeSubtitle[0].innerHTML = "Одна из первых в Узбекистане компания по шерингу (прокат) электросамокатов."
            whoarewe[0].innerHTML = "Кто мы?"
            whoareweDesc[0].innerHTML = "ViRent — Одна из первых в Узбекистане компания по шерингу (прокат) электросамокатов. Мы стремимся построить будущее, в котором транспорт будет общим, доступным и экологически чистым."
            whatwedo[0].innerHTML = "Что мы делаем?"
            whatwedoDesc[0].innerHTML = "Мы предоставляем удобную и надежную краткосрочную аренду электросамокатов по доступной цене в крупных городах Узбекистана."
            virentDesc[0].innerHTML = "Одна из первых в Узбекистане компания по шерингу (прокат) электросамокатов. Наш непревзойденный опыт, высококачественное оборудование и стремление к совершенству в работе — вот почему города и пользователи постоянно выбирают нас, чтобы доставить их туда, куда им нужно. С нами Вы преодолеете любые пробки, сэкономив кучу времени на поездке. А время - это деньги!"
            safetyFirst[0].innerHTML = "Безопасность прежде всего."
            safetyFirstDesc[0].innerHTML = "Безопасность на первом месте и всегда в ViRent. Это определяет, как мы проектируем и модернизируем наши транспортные средства, развиваем обучение и обучение водителей, а также работаем с городами, чтобы улучшить то, как строятся улицы, чтобы отдавать предпочтение людям, а не автомобилям."
            sustainability[0].innerHTML = "Устойчивость."
            sustainabilityDesc[0].innerHTML = "С ViRent везде 'Зелёный цвет'. Транспорт является вторым по величине источником глобальных выбросов парниковых газов, в основном из-за вождения. Чтобы решить проблему изменения климата и сделать города более здоровыми и пригодными для жизни, нам необходимо революционизировать городской транспорт в направлении общего, электрического и безуглеродного будущего. Электрическая совместная микромобильность может быть одним из самых устойчивых видов транспорта в мире, способным заменить все автомобильные поездки на расстояние менее 10 километров. Это наша цель."
            greenchoice[0].innerHTML = "'Зелёный' выбор."
            greenchoiceDesc[0].innerHTML = "В поездке с ViRent используется на 75 % меньше углерода, чем в сопоставимой поездке на автомобиле, а поскольку каждое транспортное средство питается от возобновляемых источников энергии, выбор ViRent вместо автомобилей всегда будет правильным выбором."
            terms[0].innerHTML = "Условия публичной оферты:"
            break
        case "uz":
            about[0].innerHTML = "Biz haqimizda"
            whyvirent[0].innerHTML = "Nega ViRent?"
            contacts[0].innerHTML = "Aloqa"
            contacts[1].innerHTML = "Aloqa"
            downloadapp[0].innerHTML = "Ilovani yuklash"
            homeTitle[0].innerHTML = "Zo'rini tanlang!"
            homeSubtitle[0].innerHTML = "O‘zbekistondagi birinchi elektrosamokat shering (ijaraga berish) kompaniyalaridan biridir."
            whoarewe[0].innerHTML = "Biz kimmiz?"
            whoareweDesc[0].innerHTML = "ViRent – O‘zbekistondagi birinchi elektrosamokat shering (ijaraga berish) kompaniyalaridan biridir. Biz arzon umumiy transport va ekologik toza kelajakni qurish tarafdorimiz."
            whatwedo[0].innerHTML = "Biz nima qilamiz?"
            whatwedoDesc[0].innerHTML = "Biz O'zbekistonning yirik shaharlarida qisqa muddatga qulay va ishonchli elektrosamokatlarni arzon narxlarda ijaraga berishni ta'minlaymiz."
            virentDesc[0].innerHTML = "O‘zbekistondagi birinchi elektrosamokat shering (ijaraga berish) kompaniyalaridan biridir. Bizning tajribamiz, yuqori sifatli uskunalarimiz va ekspluatatsion mukammallikka bo'lgan sadoqatimiz tufayli shaharlar va foydalanuvchilar kerakli manzilga yetib olish uchun bizni doimiy ravishda tanlaydi. Biz bilan siz sayohatda ko'p vaqtni tejagan holda har qanday tirbandliklarni yengasiz. Vaqt esa - bu pul demakdir!"
            safetyFirst[0].innerHTML = "Xavfsizlik - birinchi navbatda."
            safetyFirstDesc[0].innerHTML = "ViRentda xavfsizlik har doim birinchi o'rinda turadi. U transport shaxsiy harakat vositalarini qanday loyihalash va yangilash, haydovchilar tayyorlash va ta’limni rivojlantirish hamda odamlarni avtomobillardan ustun qo‘yish uchun, ko‘chalar qurilishini yaxshilash uchun shaharlar bilan hamkorlik qilish g'oyalarini ilgari suradi."
            sustainability[0].innerHTML = "Barqarorlik."
            sustainabilityDesc[0].innerHTML = "ViRent bilan yo'llar doim ochiq!. Ichki yonuvchi dvigatelli transportlar zaxarli gazlar ishlab chiqaruvchi ikkinchi eng katta omil hisoblanadi. Iqlim o'zgarishiga qarshi kurashish va shaharlarni yanada sog'lom va yashashga yaroqli qilish uchun biz shahar transportini umumiy, elektr va uglerodsiz kelajak sari kurashishimiz zarur. Umumiy elektr mikromobillik dunyodagi eng barqaror transport turlaridan biri bo'lib, 10 kilometrdan kam masofadagi barcha avtomobil sayohatlari o'rniga muqobil bo'la oladi. Bizning maqsadimiz ham aynan shudir."
            greenchoice[0].innerHTML = "'Yashil' tanlov."
            greenchoiceDesc[0].innerHTML = "Shoshilinch avtoulov qatnoviga qaraganda ViRent bilan qatnovlarda baxtsiz hodisalar 75% kamroq bo'ladi, chunki har bir samokat energiya manbalaridan quvvat oladi. Avtomobillar o'rniga ViRentni tanlash har doim tezkor tanlov bo'ladi."
            terms[0].innerHTML = "Ommaviy oferta shartlari:"
            break
    }
}

changeLanguage()