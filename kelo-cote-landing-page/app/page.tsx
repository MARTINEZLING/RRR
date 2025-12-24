import Image from "next/image"
import { Check, Shield, Truck, CreditCard, Star, Droplet, Heart, Sparkles, Award, Users, Clock } from "lucide-react"

export default function KelocoteLandingPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Ultra-long vertical mobile container */}
      <div className="max-w-md mx-auto">
        {/* TOP MARGIN - 15% blank white space for manual logo insertion */}
        <div className="h-[15vh] bg-white" />

        {/* SECTION 1 - HERO */}
        <section className="bg-white px-6 py-12 text-center">
          <div className="mb-8">
            <Image
              src="/images/img-3990.jpeg"
              alt="KELO-COTE Scar Gel"
              width={400}
              height={400}
              className="mx-auto object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#0056b3] mb-6 leading-tight">
            حل فعّال لتخفيف الندبات وتحسين مظهر البشرة
          </h1>
          <p className="text-xl text-gray-700 font-medium mb-8">جل سيليكون طبي مُثبت علميًا</p>

          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="bg-[#e6f2ff] rounded-lg p-4">
              <p className="text-2xl font-bold text-[#0056b3]">98%</p>
              <p className="text-xs text-gray-700 mt-1">نسبة النجاح</p>
            </div>
            <div className="bg-[#e6f2ff] rounded-lg p-4">
              <p className="text-2xl font-bold text-[#0056b3]">60+</p>
              <p className="text-xs text-gray-700 mt-1">دولة حول العالم</p>
            </div>
            <div className="bg-[#e6f2ff] rounded-lg p-4">
              <p className="text-2xl font-bold text-[#0056b3]">25</p>
              <p className="text-xs text-gray-700 mt-1">سنة خبرة</p>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-white to-[#f0f8ff]" />

        {/* SECTION 2 - PRODUCT INFO */}
        <section className="bg-[#f0f8ff] px-6 py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-52 h-52">
              <Image
                src="/smooth-healthy-skin-texture-close-up.jpg"
                alt="Smooth Skin"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-gray-800 text-center leading-relaxed px-4">
              KELO-COTE هو جل سيليكون متطور يساعد على تحسين مظهر الندبات.
            </p>

            <div className="bg-white rounded-lg p-6 shadow-md mt-4">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 text-center italic mb-2">
                "نتائج مذهلة! اختفت ندبة جراحتي تقريباً بعد شهرين من الاستخدام"
              </p>
              <p className="text-sm text-gray-600 text-center">- سارة م., الجزائر</p>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-[#f0f8ff] to-white" />

        <section className="bg-white px-6 py-12">
          <h2 className="text-2xl font-bold text-[#0056b3] text-center mb-8">لماذا تختار KELO-COTE؟</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-[#f0f8ff] rounded-lg p-5">
              <Award className="w-8 h-8 text-[#0056b3] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-800 mb-1">العلامة التجارية الأولى عالمياً</p>
                <p className="text-sm text-gray-700">الأكثر ثقة من قبل المهنيين الطبيين</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[#f0f8ff] rounded-lg p-5">
              <Users className="w-8 h-8 text-[#0056b3] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-800 mb-1">ملايين المستخدمين الراضين</p>
                <p className="text-sm text-gray-700">مستخدم في أكثر من 60 دولة حول العالم</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[#f0f8ff] rounded-lg p-5">
              <Clock className="w-8 h-8 text-[#0056b3] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-800 mb-1">نتائج سريعة وملحوظة</p>
                <p className="text-sm text-gray-700">تحسن ملحوظ في غضون 6-8 أسابيع</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-white to-[#f0f8ff]" />

        <section className="bg-[#f0f8ff] px-6 py-12">
          <h2 className="text-2xl font-bold text-[#0056b3] text-center mb-8">نتائج حقيقية ومُثبتة</h2>

          {/* Before/After Comparison 1 - Surgical Scar */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-5">ندبة جراحية</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Image
                  src="/before-surgical-scar-red-raised.jpg"
                  alt="Before Treatment"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  قبل
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/after-surgical-scar-faded-smooth.jpg"
                  alt="After Treatment"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  بعد
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-3">النتائج بعد 8 أسابيع من الاستخدام المنتظم</p>
            <div className="bg-white rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600" />
                <p className="text-sm text-gray-800">تحسن بنسبة 85% في اللون</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <p className="text-sm text-gray-800">انخفاض الارتفاع بنسبة 70%</p>
              </div>
            </div>
          </div>

          {/* Before/After Comparison 2 - Burn Scar */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-5">ندبة حروق</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Image
                  src="/before-burn-scar-discolored.jpg"
                  alt="Before Treatment"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  قبل
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/after-burn-scar-healed-even-tone.jpg"
                  alt="After Treatment"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  بعد
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-3">النتائج بعد 12 أسبوعاً من الاستخدام المنتظم</p>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-800 italic">"لم أصدق النتيجة! أصبحت ندبة الحرق أقل وضوحاً بكثير"</p>
              <p className="text-xs text-gray-600 mt-2">- أحمد ب., الجزائر</p>
            </div>
          </div>

          {/* Before/After Comparison 3 - Acne Scars */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-5">ندبات حب الشباب</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Image
                  src="/before-acne-scars-face.jpg"
                  alt="Before Treatment"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  قبل
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/after-acne-scars-smooth-face.jpg"
                  alt="After Treatment"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  بعد
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-3">النتائج بعد 6 أسابيع من الاستخدام المنتظم</p>
            <div className="bg-white rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600" />
                <p className="text-sm text-gray-800">بشرة أكثر نعومة بنسبة 90%</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <p className="text-sm text-gray-800">ملمس موحّد ومتجانس</p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-white rounded-lg p-5 mt-8">
            <div className="flex items-center justify-center gap-3">
              <Check className="w-8 h-8 text-[#0056b3]" />
              <p className="text-lg font-bold text-[#0056b3]">نتائج مُثبتة سريرياً</p>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-[#f0f8ff] to-white" />

        {/* SECTION 3 - BENEFITS WITH ICONS */}
        <section className="bg-white px-6 py-12">
          <h2 className="text-2xl font-bold text-[#0056b3] text-center mb-8">الفوائد الرئيسية</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center text-center gap-3 bg-[#f0f8ff] rounded-lg p-5">
              <div className="w-16 h-16 bg-[#0056b3] rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-800">يسطّح الندبات</p>
              <p className="text-xs text-gray-600">يقلل من بروز الندبات المرتفعة</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 bg-[#f0f8ff] rounded-lg p-5">
              <div className="w-16 h-16 bg-[#0056b3] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-800">يقلل الاحمرار</p>
              <p className="text-xs text-gray-600">يوحّد لون البشرة تدريجياً</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 bg-[#f0f8ff] rounded-lg p-5">
              <div className="w-16 h-16 bg-[#0056b3] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-800">يخفف الحكة</p>
              <p className="text-xs text-gray-600">يهدئ الانزعاج والتهيج</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 bg-[#f0f8ff] rounded-lg p-5">
              <div className="w-16 h-16 bg-[#0056b3] rounded-full flex items-center justify-center">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-800">تسريع التجدد</p>
              <p className="text-xs text-gray-600">يحفز عملية الشفاء الطبيعية</p>
            </div>
          </div>

          <div className="bg-[#e6f2ff] rounded-lg p-6 mt-8">
            <h3 className="text-lg font-bold text-[#0056b3] text-center mb-4">مزايا إضافية</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0056b3] flex-shrink-0" />
                <p className="text-sm text-gray-800">غير دهني وسريع الامتصاص</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0056b3] flex-shrink-0" />
                <p className="text-sm text-gray-800">لا يترك أثراً أو بقايا</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0056b3] flex-shrink-0" />
                <p className="text-sm text-gray-800">آمن للبشرة الحساسة</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0056b3] flex-shrink-0" />
                <p className="text-sm text-gray-800">يمكن استخدامه تحت المكياج</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-white to-[#f0f8ff]" />

        {/* SECTION 4 - HOW IT WORKS */}
        <section className="bg-[#f0f8ff] px-6 py-12">
          <h2 className="text-2xl font-bold text-[#0056b3] text-center mb-5">كيف يعمل؟</h2>
          <div className="bg-white rounded-lg p-5 shadow-md mb-5">
            <div className="relative">
              <Image
                src="/medical-cross-section-diagram-of-skin-layers-showi.jpg"
                alt="Skin Cross Section"
                width={400}
                height={300}
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <p className="text-base text-gray-800 text-center leading-relaxed mb-6">
            يشكّل طبقة شفافة تحمي البشرة وتحافظ على الترطيب.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-2">1. حاجز وقائي</h4>
              <p className="text-sm text-gray-700">يخلق طبقة واقية تحمي الندبة من العوامل الخارجية</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-2">2. ترطيب عميق</h4>
              <p className="text-sm text-gray-700">يحافظ على رطوبة البشرة المثالية للشفاء</p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-2">3. تنظيم إنتاج الكولاجين</h4>
              <p className="text-sm text-gray-700">يساعد على تكوين ندبة أكثر نعومة ومرونة</p>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-[#f0f8ff] to-white" />

        {/* SECTION 5 - SUITABLE FOR */}
        <section className="bg-white px-6 py-12">
          <h2 className="text-2xl font-bold text-[#0056b3] text-center mb-8">مناسب لجميع أنواع الندبات</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0056b3]">
                <Image
                  src="/surgical-scar-medical-illustration.jpg"
                  alt="Surgical Scars"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-gray-800">ندبات جراحية</p>
              <p className="text-xs text-gray-600">بعد العمليات والخياطة</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0056b3]">
                <Image
                  src="/burn-scar-healing-medical.jpg"
                  alt="Burns"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-gray-800">حروق</p>
              <p className="text-xs text-gray-600">جميع درجات الحروق</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0056b3]">
                <Image
                  src="/acne-scars-on-face-medical.jpg"
                  alt="Acne Scars"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-gray-800">ندبات حب الشباب</p>
              <p className="text-xs text-gray-600">آثار البثور القديمة</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0056b3]">
                <Image
                  src="/injury-wound-healing-medical.jpg"
                  alt="Injuries"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-gray-800">إصابات</p>
              <p className="text-xs text-gray-600">جروح وكدمات</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0056b3]">
                <Image
                  src="/c-section-cesarean-scar-medical.jpg"
                  alt="C-sections"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-gray-800">عمليات قيصرية</p>
              <p className="text-xs text-gray-600">ندبات الولادة</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0056b3]">
                <Image
                  src="/child-safe-icon-medical-symbol.jpg"
                  alt="Child Safe"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-gray-800">آمن للأطفال</p>
              <p className="text-xs text-gray-600">من عمر سنتين فما فوق</p>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-[#f0f8ff] to-white" />

        {/* SECTION 6 - HOW TO USE */}
        <section className="bg-[#f0f8ff] px-6 py-12">
          <h2 className="text-2xl font-bold text-[#0056b3] text-center mb-8">طريقة الاستخدام</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm">
              <div className="w-12 h-12 bg-[#0056b3] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-gray-800 font-bold mb-1">نظّف البشرة وجففها جيداً</p>
                <p className="text-sm text-gray-600">تأكد من أن المنطقة نظيفة وجافة تماماً</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm">
              <div className="w-12 h-12 bg-[#0056b3] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-gray-800 font-bold mb-1">ضع طبقة رقيقة من الجل</p>
                <p className="text-sm text-gray-600">كمية صغيرة تكفي لتغطية المنطقة</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm">
              <div className="w-12 h-12 bg-[#0056b3] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-gray-800 font-bold mb-1">اترك الجل ليجف تماماً</p>
                <p className="text-sm text-gray-600">يجف خلال 4-5 دقائق</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 mt-6">
            <p className="text-center text-gray-800 text-lg font-bold mb-3">يوضع مرتين يوميًا</p>
            <p className="text-center text-gray-600 text-sm">صباحاً ومساءً على بشرة نظيفة وجافة</p>
          </div>

          <div className="bg-[#0056b3] rounded-lg p-6 mt-6 text-white">
            <h3 className="text-lg font-bold text-center mb-4">نصائح للحصول على أفضل النتائج</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">استخدم المنتج بانتظام للحصول على نتائج مثالية</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">ابدأ الاستخدام فور التئام الجرح</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">استمر في الاستخدام لمدة 3-6 أشهر</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-[#f0f8ff] to-white" />

        {/* SECTION 7 - TRUST & REVIEWS */}
        <section className="bg-white px-6 py-12">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">5 من 5</p>
            <p className="text-gray-600">أكثر من 10,000 تقييم إيجابي</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-[#f0f8ff] rounded-lg p-5">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-800 mb-2">
                "منتج رائع! استخدمته بعد عملية جراحية والنتيجة مذهلة. الندبة اختفت تقريباً"
              </p>
              <p className="text-xs text-gray-600">- فاطمة ع., تونس</p>
            </div>

            <div className="bg-[#f0f8ff] rounded-lg p-5">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-800 mb-2">"أنصح به بشدة! ابنتي استخدمته لندبة حرق وتحسنت كثيراً"</p>
              <p className="text-xs text-gray-600">- محمد ر., مصر</p>
            </div>

            <div className="bg-[#f0f8ff] rounded-lg p-5">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-800 mb-2">"أفضل منتج جربته لآثار حب الشباب. بشرتي أصبحت أنعم بكثير"</p>
              <p className="text-xs text-gray-600">- ليلى م., الجزائر</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#f0f8ff] rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 text-[#0056b3] mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">مُعتمد طبياً</p>
            </div>
            <div className="bg-[#f0f8ff] rounded-lg p-4 text-center">
              <Check className="w-8 h-8 text-[#0056b3] mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">مُختبر سريرياً</p>
            </div>
            <div className="bg-[#f0f8ff] rounded-lg p-4 text-center">
              <Heart className="w-8 h-8 text-[#0056b3] mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">آمن للبشرة</p>
            </div>
          </div>
        </section>

        <div className="h-6 bg-gradient-to-b from-white to-[#0056b3]" />

        {/* SECTION 8 - FOOTER LOGISTICS */}
        <section className="bg-[#0056b3] px-6 py-12 text-white">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <p className="text-lg font-bold">منتج أصلي 100%</p>
                <p className="text-sm text-white/80">مضمون ومعتمد</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-lg font-bold">توصيل سريع لجميع الولايات</p>
                <p className="text-sm text-white/80">خلال 2-5 أيام عمل</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-7 h-7" />
              </div>
              <div>
                <p className="text-lg font-bold">الدفع عند الاستلام</p>
                <p className="text-sm text-white/80">ادفع عند استلام المنتج</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom padding */}
        <div className="h-6 bg-[#0056b3]" />
      </div>
    </div>
  )
}
