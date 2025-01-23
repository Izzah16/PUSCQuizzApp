import React, { useEffect, useState, useRef } from 'react';

const questions = [
  { "question": "آپ ﷺکے دادا کا پورا اور اصلی نام کیا ہے؟", "answer": "عبد المطلب عامر اور لقب شیبہ تھا" },
  { "question": "حضرت آمنہ کے ساتھ آپﷺ کس مقام پر تھے جب ان کا انتقال ہوا؟", "answer": "مقام ابواء" },
  { "question": "حضورﷺ پہلی مرتبہ کسی جنگ میں شریک ہوئے؟", "answer": "حرب فجار" },
  { "question": "اس جنگ میں آپ ﷺکی عمر مبارک کیا تھی؟", "answer": "تقریباً 20 سال" },
  { "question": "حضور اکرم ﷺ کی بعثت کی دعا کس نبی نے دی؟", "answer": "حضرت ابراہیم علیہ السلام نے" },
  { "question": "حضرت ابراہیم کے بعد حضور کی بعثت کی بشارت کس نے دی؟", "answer": "حضرت موسیٰ اور حضرت عیسیٰ علیہما السلام نے" },
  { "question": "حضورﷺ کے چچا جو جنگِ اُحد میں شہید ہوئے، کا کیا نام ہے؟", "answer": "حضرت حمزہؓ" },
  { "question": "حضورﷺ کے کسی چچا نے اپنے اسلام کو ظاہر کیے بغیر آپ کی مدد کی تھی؟", "answer": "حضرت عباسؓ نے" },
  { "question": "جس سال آپ ﷺ کی ولادت ہوئی اسے کیا کہا جاتا ہے؟", "answer": "عام الفیل" },
  { "question": "عام الفیل کیوں کہا جاتا ہے؟", "answer": "کیونکہ اس سال ابرہہ خانہ کعبہ کو ڈھانے کے لیے آیا تھا اور اس کے لشکر میں ہاتھی شامل تھے" },
  { "question": "ابرہہ کون تھا؟", "answer": "ابرہہ حبشہ کے بادشاہ کی طرف سے یمن کا ایک گورنر تھا" },
  { "question": "ابرہہ خانہ کعبہ کو ڈھانے کیوں آیا تھا؟", "answer": "کیونکہ اس کی عبادت گاہ کو کسی نے گندہ کیا تھا اور وہ انتقام لینے آیا تھا" },
  { "question": "پہلی وحی کے بعد کتنا عرصہ وحی نہیں آئی؟", "answer": "تقریباً ڈھائی سال" },
  { "question": "دوسری وحی میں آپﷺ نے حضرت جبرائیل کو کس عالم میں دیکھا؟", "answer": "زمین و آسمان کے درمیان ایک کرسی پر بیٹھے ہوئے" },
  { "question": "دوسری وحی میں آپ ﷺپر کون سی سورت اتری؟", "answer": "سورہ مدثر" },
  { "question": "آپﷺ کے کسی دشمن کا ذکر قرآن نے بڑے سخت الفاظ سے کیا ہے؟", "answer": "ابولہب" },
  { "question": "خفیہ تبلیغ کا سلسلہ کتنا عرصہ رہا؟", "answer": "تقریباً تین سال" },
  { "question": "اسلام کے ابتدائی دنوں میں سب سے زیادہ حضورﷺ اور اسلام کی خدمت کس نے کی؟", "answer": "حضرت ابو بکر صدیقؓ اور حضرت خدیجہؓ" },
  { "question": "مکہ میں حضور ﷺ نے سب سے پہلے وحی کی کتابت کا شرف کس کو بخشا؟", "answer": "شرجیل بن حسنہ کندی" },
  { "question": "عام الحزن سے کیا مراد ہے؟", "answer": "غم کا سال" },
  { "question": "عام الحزن کس سن کو کہا جاتا ہے؟", "answer": "نبوت کے دسویں سال کو" },
  { "question": "عام الحزن میں کیا ہوا تھا؟", "answer": "حضور کے چچا ابو طالب اور حضرت خدیجہؓ کا انتقال ہوا" },
  { "question": "واقعہ معراج کس سن میں ہوا؟", "answer": "نبوت کے بارہویں سال" },
  { "question": "معراج کا مطلب کیا ہے؟", "answer": "بلندی" },
  { "question": "معراج میں حضور ﷺ کہاں کہاں تشریف لے گئے؟", "answer": "لامکاں (یعنی زمان و مکان کی حدود سے آگے)" },
  { "question": "معراج میں کون سا فرشتہ آپﷺ کے ساتھ تھا؟", "answer": "حضرت جبرائیلؑ" },
  { "question": "سفر معراج میں آپﷺکس سواری پر سوار تھے؟", "answer": "براق" },
  { "question": "معراج کا تحفہ کیا کہا جاتا ہے؟", "answer": "نماز" },
  { "question": "معراج کا ذکر قرآن کی کن دو سورتوں میں ہے؟", "answer": "سورہ بنی اسرائیل اور سورہ نجم" },
    {
      "question": "سفر طائف آپﷺ نے کب کیا؟"
    },
    {
      "question": "مکہ میں آپ ﷺ کے کسی چچانے اسلام قبول کیا؟"
    },
    {
      "question": "بیعت عقبہ اولی کب ہوئی؟"
    },
    {
      "question": "اس بیعت میں کتنے افراد نے شرکت کی؟"
    },
    {
      "question": "یہ لوگ کہاں سے آئے تھے؟"
    },
    {
      "question": "یہ لوگ کسی قبیلہ سے تعلق رکھتے تھے؟"
    },
    {
      "question": "حضور ﷺ نے کس صحابی کو ان لوگوں کے ساتھ تبلیغ کی غرض سے بھیجا؟"
    },
    {
      "question": "بیعت عقبہ ثانیہ کب ہوئی؟"
    },
    {
      "question": "یہ بیعت کسی موقع پر ہوئی؟"
    },
    {
      "question": "کون سی عورت آپ کی راہ میں کانٹے بچھاتی تھی؟"
    },
    
    {
      "question": "معراج کی رات آپ ﷺکس کے گھر میں مقیم تھے؟"
    },
    {
      "question": "معراج میں پہلی منزل کون سی تھی؟"
    },
    {
      "question": "معراج کی رات جبرائیل نے کسی مقام سے آگے جانے سے انکار کر دیا تھا؟"
    },
    {
      "question": "کسی نبی کے کہنے پر آپ اللہ کے پاس نمازوں میں تخفیف کرانے جاتے رہے؟"
    },
    {
      "question": "معراج کی رات آپ ﷺنے کس نبی کو اپنی قبر میں نماز پڑھتے ہوئے دیکھا؟"
    },
    {
      "question": "مسجد اقصیٰ میں حضور  ﷺکے خطاب کے بعد کس نے خطاب کیا؟"
    },
    {
      "question": "آپ نے کیا فرمایا تھا حضورﷺ کے بارے میں؟"
    },
    {
      "question": "معراج سے واپسی پر آپ ﷺنے سب سے پہلے اس واقعہ کو کس کو سنایا؟"
    },
    {
      "question": "حضورﷺ نے معراج میں وہ کون سی جگہ دیکھی تھی جہاں فرشتے طواف کرتے ہیں؟"
    },
    {
      "question": "ہجرت کا لغوی مطلب کیا ہے؟"
    },
    {
      "question": "حدیث کی رو سے اصل مہاجر کون ہے؟"
    },
    {
      "question": "غار ثور میں اہل مکہ کی خبریں حضورﷺ کو کون دیا کرتا تھا؟"
    },
    {
      "question": "حضور ﷺسرور کائنات نے مکہ کسی ماہ میں چھوڑا۔"
    },
    {
      "question": "کس تاریخ کو مکہ سے ہجرت کی؟"
    },
   
    {
      "question": "مدینہ کی طرف سفر میں حضورﷺ کے ساتھ کتنے افراد تھے؟"
    },
    {
      "question": "کون کون تھے؟"
    },
    {
      "question":"غار میں جب حضرت ابو بکر صدیق کو غم لاحق ہوا تو اللہ تعالٰی نے کون سی آیت نازل فرمائی جو رسول اللہ صلی اللہ علیہ وآلہ وسلم نے تلاوت فرمائی؟"
    },
    {"question": "حضورﷺ کس جانور پر سوار تھے؟"
    },
    { "question": "اس اونٹنی کا نام کیا ہے؟"
    },
    {"question": "حضورﷺ کی سواری کسی صحابی کے گھرڑ کی؟"
    },
    {"question": "میثاق مدینہ کو کیا کہا جاتا ہے؟"},
    {"question": "یہودیوں کے مدینہ میں کون کون سے قبائل آباد تھے؟"},
    {"question": "یہود و نصاریٰ نے حضور ﷺکے بارے میں کیا کہا؟"},
    {"question": "حضور ﷺنے کسے پیغمبروں کا سردار قرار دیا؟"
    },
    {"question": "پہلا خطبہ کس جگہ دیا تھا؟"
    },
    {"question": "جنگ بدر کن مہاجرین میں ہوئی تھی؟"
    },
    {"question": "حضورﷺ نے غزوہ بدر میں کتنے صحابہ کو بھیجا؟"
    },
    {"question": "جنگ احد کن مہاجرین میں ہوئی تھی؟"
    },
    {"question": "غزوہ احد میں کس کے چہرے پر زخم لگا تھا؟"},
    {"question": "جنگ خندق میں کون سے قبیلے کا ذکر ہے؟"},
    {"question": "غزوہ خیبر کا واقعہ کن صحابہ کے ساتھ ہوا؟"},
    {"question": "غزوہ خیبر میں کون فاتح ہوا؟"},
    {"question": "غزوہ تبوک میں آپ ﷺ نے کتنے صحابہ کو بھیجا؟"},
    { "question": "غزوہ بدر میں قریش کے کون سے بڑے بڑے سردار مارے گئے؟", "answer": "ابو جہل، امیہ بن خلف، عقبه شیبه" },
    { "question": "غزوہ بدر میں مسلمانوں کی طرف سے بہادری کے جوہر دکھانے والے دو صحابہ کے نام ۔", "answer": "حضرت حمزہ، حضرت علی" },
    { "question": "غزوہ بدر میں حضور مدینہ میں کسی کو اپنا نائب بنا کر آئے تھے؟", "answer": "حضرت ابولبیا بن منذر بنه" },
    { "question": "غزوہ بدر کا ذکر قرآن کی کن سورتوں میں ہے؟", "answer": "سورة آل عمران اور سورہ انفال" },
    { "question": "غزوہ بدر کے قیدیوں سے کیا فدیہ لیا گیا؟", "answer": "ایک ہزار سے پانچ ہزار زر" },
    { "question": "غزوہ بدر میں جبرائیل علیہ السلام کے گھوڑے کا نام کیا تھا؟", "answer": "حضرت جبرائیل علیہ السلام کے گھوڑے کا نام تھا" },
    { "question": "غزوہ احد کب ہوا؟", "answer": "۳ ہجری میں" },
    { "question": "غزوہ احد کسی ماہ میں ہوا؟", "answer": "ربیع الاول میں" },
    { "question": "غزوہ احد میں مسلمانوں کی تعداد کتنی تھی؟", "answer": "سات سو" },
    { "question": "کفار کی تعداد کتنی تھی؟", "answer": "تین ہزار" },
    { "question": "غزوہ احد میں کفار کا سپہ سالار کون تھا؟", "answer": "ابوسفیان" },
    { "question": "حضور   ﷺنے کسی چوٹی پر پچاس تیراندازوں کا دستہ مقرر فرمایا؟", "answer": "منین" },
    { "question": "ان کا سپہ سالار کس کو مقرر فرمایا؟", "answer": "حضرت عبداللہ بن جبیر" },
    { "question": "غزوہ احد میں کتنے مسلمان شہید ہوئے؟", "answer": "ستر (۷۰)" },
    { "question": "کتنے کفار مارے گئے؟", "answer": "۲۲" },
    { "question": "حضور کے کون سے چچا اس غزوہ میں شہید ہوئے؟", "answer": "حضرت حزون" },
    { "question": "ان کو کس نے شہید کیا؟", "answer": "وحشی نے" },
    { "question": "کسی خاتون نے حضرت حمزہ کی لاش کی بے حرمتی کی؟", "answer": "ہندہ زوجہ ابوسفیان نے" },
    { "question": "غزوہ احد کا ذکر قرآن کی کس سورت میں ہے؟", "answer": "سورة آل عمران" },
    { "question": "حضرت خدیجہ کو رسول اللہ (ﷺ) کس نام سے یاد کرتے تھے؟", "answer": "خیر النساء (بہترین عورت)" },
    { "question": "حضرت خدیجہ کا خاندان کون سا تھا؟", "answer": "بنو اسد" },
    { "question": "حضرت خدیجہ سے رسول اللہ (ﷺ) کی کتنی اولاد ہوئی؟", "answer": "چھ اولاد" },
    { "question": "حضرت خدیجہ سے آپﷺ نکاح حضرت عثمان سے ہوا؟", "answer": "حضرت رقیہ اور حضرت ام کلثوم" },
    { "question": "حضور ﷺ کی دوسری بیوی کا نام کیا تھا؟", "answer": "حضرت سودہ" },
    { "question": "کون سے جانور نے حضور ﷺ سے اپنے مالک کی شکایت کی تھی؟", "answer": "اونٹ نے" },
    { "question": "آپ ﷺ کے دست مبارک میں کس چیز نے کلمہ پڑھا؟", "answer": "کنکریوں نے" },
    { "question": "غزوہ بدر میں آپ ﷺنے مٹھی میں کنکریاں لے کر کیا فرمایا؟", "answer": "شَاهَتِ الْوُجُوهُ (چہرے بگڑ جائیں)" },
    { "question": "حضورﷺ کو پکارنے کے آداب کس سورت میں بیان کیے گئے ہیں؟", "answer": "سورہ حجرات اور سورہ نور میں" },
    { "question": "قرآن کی کس سورت میں ایذا دینے والوں کے لیے عذاب کی وعید ہے؟", "answer": "سورہ احزاب میں" },
    { "question": "مدینہ میں داخل ہونے پر کون سا پہاڑ استقبال کرتا ہے؟", "answer": "احد پہاڑ" },
    { "question": "عہد رسالت میں کس نے دعویٰ نبوت کیا تھا؟", "answer": "اسود عنسی نے" },
    { "question": "خاتم النبیین کی اصطلاح کہاں بیان کی گئی ہے؟", "answer": "سورہ احزاب میں" },
    { "question": "حضورﷺ کا آخری نکاح کس کے ساتھ ہوا؟", "answer": "حضرت صفیہ بنت حیی کے ساتھ" },
    { "question": "فتح مکہ میں کتنے مسلمان شریک تھے؟", "answer": "10,000 مسلمان" },
    { "question": "آخری نماز کون سی تھی جو حضور ﷺ نے جماعت سے ادا کی؟", "answer": "مغرب کی نماز" },
    { "question": "شق القمر کا معجزہ کس سورت میں بیان ہوا؟", "answer": "سورہ قمر" },
    { "question": "حضور ﷺ کو سینہ کشادہ ہونے کی خوشخبری کس سورت میں سنائی گئی؟", "answer": "سورہ الم نشرح" },
    { "question": "حضور ﷺکو خوشبو کون سی پسند تھی؟", "answer": "کستوری" },
    { "question": "قرآن کی کس سورت میں حضورﷺ کے اہل بیت کا ذکر ہے؟", "answer": "سورہ آل عمران میں" },
    { "question": "غزوہ خیبر میں یہودی خاتون نے حضور ﷺکو کیا پیش کیا؟", "answer": "زہر آلود گوشت" },
    { "question": "حضور ﷺ کا وصال کے وقت آخری عمل کیا تھا؟", "answer": "مسواک کرنا" },
    { "question": "غزوہ احزاب کب ہوا؟", "answer": "پانچ ہجری" },
    { "question": "غزوہ احزاب کس ماہ میں ہوا؟", "answer": "ذی قعد میں" },
    { "question": "غزوہ احزاب کا دوسرا نام کیا ہے؟", "answer": "خرق" },
    { "question": "دوران خندق کی کھدائی کس صحابی نے آپ کی دعوت فرمائی تھی؟", "answer": "حضرت جابر بن عبد اللہ" },
    { "question": "خندق کھودنے میں کتنے دن لگے تھے؟", "answer": "۱۸ دن" },
    { "question": "خندق مدینہ کے کس جانب کھودی گئی تھی؟", "answer": "شمال سے جنوب کی طرف" },
    { "question": "اس غزوہ میں مسلمانوں کی تعداد کتنی تھی؟", "answer": "تین ہزار" },
    { "question": "کفار کی تعداد کتنی تھی؟", "answer": "دس ہزار" },
    { "question": "کفار کا سردار کون تھا؟", "answer": "ابوسفیان" },
    { "question": "اس غزوہ میں یہودیوں کے کس قبیلے نے مسلمانوں کے ساتھ بدعہدی کی تھی؟", "answer": "بنو قریظہ نے بدعہدی کی" },
    { "question": "غزوہ خندق میں محاصرہ کتنے دن جاری رہا؟" },
    { "question": "غزوہ خندق میں مسلمانوں کی طرف سے کون سے انصاری سردار زخمی ہو گئے تھے؟" },
    { "question": "قرآن میں اس غزوہ کا ذکر کس سورت میں ہے؟" },
    { "question": "اس غزوہ میں حضورﷺ کی کسی پھوپھی نے بہادری کا بے مثال مظاہرہ کیا؟" },
    { "question": "غزوہ احزاب کے بعد کون سے انصاری سردار کا انتقال ہوا جو حضورﷺ کے بڑے پیارے صحابی تھے؟" },
    { "question": "غزوہ خیبر کس سن میں ہوا؟" },
    { "question": "مسلمانوں کی تعداد غزوہ خیبر میں کتنی تھی؟" },
    { "question": "خیبر کے کتنے قلعے تھے؟" },
    { "question": "ابتدائی طور پر مسلمانوں نے کتنے قلعے فتح کر لئے تھے؟" },
    { "question": "کون سا قلعہ تھا جو فتح نہیں ہو رہا تھا؟" },
    { "question": "حضورﷺ نے کس صحابی کو اس قلعے کی فتح کے لیے بھیجا؟" },
    { "question": "حضرت علی نے یہودیوں کے کس نامی گرامی پہلوان کو واصل فی النار کیا؟" },
    { "question": "دوران لڑائی حضرت علی نے کس دروازے کو اکھاڑ کر ڈھال بنا لیا تھا؟" },
    { "question": "غزوہ خیبر میں یہودیوں کی مفتوحہ اراضی میں سے کون سا مشہور باغ مسلمانوں کے ہاتھ آیا؟" },
    { "question": "غزوہ خیبر میں کون سے صحابی زہر ملا ہوا کھانا کھانے سے شہید ہو گئے؟" },
    { "question": "حضور نے فتح خیبر پر کس سے نکاح فرمایا تھا؟" },
    { "question": "غزوہ خیبر میں کتنے یہودی مارے گئے؟" },
    { "question": "غزوہ خیبر میں کتنے مسلمان شہید ہوئے؟" },
    { "question": "صلح حدیبیہ کس سن میں ہوئی؟" },
    { "question": "مسلمان مدینہ سے کس غرض سے چلے گئے تھے؟" },
    { "question": "صلح حدیبیہ میں کون سی بیعت لی گئی؟" },
    { "question": "بیعت کس وجہ سے لی گئی؟" },
    { "question": "بیعت کہاں لی گئی؟" },
    { "question": "بیعت رضوان کا ذکر قرآن کی کس سورت میں ہے؟" },
    { "question": "صلح حدیبیہ کے موقع پر قریش کی طرف سے کون سفیر تھا؟" },
    { "question": "کون سے صحابی کو اس موقع پر زنجیروں میں جکڑا ہوا پیش کیا گیا؟" },
    { "question": "صلح حدیبیہ کا معاہدہ کس صحابی نے لکھا؟" },
    { "question": "کون سے صحابی کو صلح حدیبیہ کی شرائط پر پریشانی ہوئی جو بعد میں زائل ہوگئی؟" },
    { "question": "صلح حدیبیہ کی دو شرائط لکھیں؟" },
    { "question": "فتح مکہ کس سن میں ہوا؟" },
    { "question": "فتح مکہ کس ماہ میں ہوا؟" },
    { "question": "فتح مکہ کے وقت مسلمانوں کی تعداد کتنی تھی؟" },
    { "question": "فتح مکہ کے اسباب لکھیں؟" },
    { "question": "فتح مکہ کا ذکر قرآن کی کس سورت میں ہے؟" },
    { "question": "اس موقع پر حضور ﷺ کون سی آیت تلاوت فرما رہے تھے؟" },
    { "question": "مکہ میں آپ ﷺ نے کتنے روز قیام فرمایا؟" },
    { "question": "مکہ سے حضور ﷺ کسی غزوہ کی طرف روانہ ہوئے؟" },
    { "question": "غزوہ حنین میں مسلمانوں کے لشکر کی تعداد کیا تھی؟" },
    { "question": "اس غزوہ کا ذکر قرآن کی کس سورت میں ہے؟" },
    { "question": "آپ ﷺ نے آخری غزوہ کب لڑا؟" },
    { "question": "اس غزوہ کا جو آپ کا آخری ہے، نام بتائیں؟" },
    { "question": "غزوہ تبوک کو کسی اور الفاظ سے یاد کیا جاتا ہے؟" },
    { "question": "غزوہ تبوک کی وجہ کیا تھی؟" },
    { "question": "اس غزوہ میں حضور ﷺ نے مدینہ پر اپنا نائب کس کو بنایا تھا؟" },
    { "question": "مسجد ضرار میں منافقین کیا کرتے تھے؟" },
    { "question": "اس مسجد کا ذکر قرآن کی کس سورت میں ہے؟" },
    { "question": "یوم بدر حضرت علی کے ہاتھ میں جو تلوار تھی اس کا نام کیا تھا؟" },
    { "question": "کس غزوہ میں صحابی کی تلوار ٹوٹنے پر حضور ﷺ نے ان کو چھڑی عطا فرمائی جو تلوار بن گئی؟" },
    { "question": "حضرت عمر نے کس غزوہ میں اپنے ماموں کو قتل کیا جو کافر تھا؟" },
    { "question": "حضرت ابو بکر کے صاحبزادے کس غزوہ میں مسلمانوں کے مقابلے میں آئے؟" },
    { "question": "کس غزوہ سے واپسی پر منافقین نے حضرت عائشہ پر تہمت لگائی؟" },
    { "question": "کس غزوہ میں حضور ﷺ کے مد مقابل کوئی نہیں آیا اور مسلمانوں نے تجارت کرکے خوب نفع کمایا؟" },
    { "question": "آپ ﷺ نے کس سن میں سلاطین کو خطوط لکھے؟" },
    { "question": "آپ ﷺ کے خط کا عنوان کیا ہوتا تھا؟" },
    { "question": "آپ ﷺ خط کے آخر میں کیا لکھتے؟" },
    { "question": "آپ ﷺ نے کتنے حکمرانوں کو خطوط لکھے؟" },
    { "question": "آپ ﷺ کے خط کو کس بدبخت حکمران نے پھاڑ ڈالا تھا؟" },
    { "question": "آپ ﷺ کے قاصدوں کی کل تعداد کتنی تھی؟" },
    { "question": "حضور ﷺ نے شاہ حبشہ کے پاس کس کو بھیجا تھا؟" },
    { "question": "حضور ﷺ نے شاہ روم کے پاس اپنے کس صحابی کو بھیجا تھا؟" },
    { "question": "حضور ﷺ کے کس قاصد کی شکل میں حضرت جبرائیل آتے تھے؟" },
    { "question": "حضور ﷺ نے طائف کے بادشاہ کو کس کے ہاتھ خط بھیجا؟" },
    { "question": "شاہ طائف کا نام کیا تھا؟" },
    { "question": "حضور ﷺ نے مسیلمہ کذاب کی طرف کس صحابی کو بھیجا؟" },
    { "question": "مسیلمہ کذاب نے حضور ﷺ کے قاصد کے ساتھ کیا سلوک کیا؟" },
    { "question": "حاکم بصرہ کے پاس حضور ﷺ نے کس قاصد کو بھیجا؟" },
    {"question": "حضورﷺ نے کس موقع پر فرمایا تھا کہ مجھے تمہارا رسول بنا کر بھیجا گیا ہے؟" },
    {"question": "آخری آیت نازل ہونے کے بعد آپ ﷺنے کیا کیا؟"},
    {"question": "حضورﷺ کی وفات کی خبر کس نے دی؟"},
    {"question": "حضورﷺ کی وفات کے وقت آپ کی عمر کیا تھی؟"},
    {"question": "حضورﷺ کی تدفین کس جگہ ہوئی؟"
    },
   
];
function Quiz({ onBackToWelcome }) {
  const [teams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [timerInterval, setTimerInterval] = useState(null);
  const [numberOfTeams, setNumberOfTeams] = useState(10);
  const [disqualifiedTeams, setDisqualifiedTeams] = useState([]);
  const [tickPlaying, setTickPlaying] = useState(false);
  const tickSound = useRef(new Audio('/assets/tick.mp3'));
  const buzzSound = new Audio('/assets/buzz.mp3');
  const correctSound = new Audio('/assets/correct.mp3');
  const [timerRunning, setTimerRunning] = useState(false);

  const tick_play = () => {
    setTickPlaying(true);
    tickSound.current.play();
  };

  const tick_pause = () => {
    setTickPlaying(false);
    tickSound.current.pause();
    tickSound.current.currentTime = 0;
  };

  useEffect(() => {
    loadInitialScores();
    loadQuestion();

    return () => {
      stopTimer();
      stopSounds();
    };
  }, [numberOfTeams]);

  const fetchTeams = async () => {
    const response = await fetch('http://localhost:3000/teams');
    return await response.json();
  };

  const loadInitialScores = async () => {
    try {
      const fetchedTeams = await fetchTeams();
      setTeams(fetchedTeams.slice(0, numberOfTeams));
      setCurrentTeam(0); // Reset to the first team when scores are loaded
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const loadQuestion = () => {
    // Logic to load the question based on currentQuestionIndex
  };

  const startTimer = () => {
    if (timerRunning) return;
    setTimeLeft(20); // Reset time left
    setTimerRunning(true);
    tick_play();

    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          clearInterval(interval);
          buzzSound.play(); // Play buzzer sound when time's up
          stopTimer(); // Stop timer when time's up
          return 0; // Stop countdown at zero
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimerInterval(interval);
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    setTimerRunning(false);
    tick_pause();
  };

  const stopSounds = () => {
    buzzSound.pause();
    buzzSound.currentTime = 0; // Reset buzzer sound to the beginning
    correctSound.pause(); // Stop correct sound if it's playing
    correctSound.currentTime = 0; // Reset correct sound to the beginning
  };

  // Fix for team progression, ensuring disqualified teams are skipped
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);

    setCurrentTeam((prevTeam) => {
      let nextTeam = (prevTeam + 1) % teams.length;

      // Loop to skip disqualified teams
      while (disqualifiedTeams.includes(teams[nextTeam].teamName)) {
        nextTeam = (nextTeam + 1) % teams.length;
      }

      return nextTeam;
    });

    setTimeLeft(20); // Reset timer to 20 seconds automatically
    stopTimer(); // Stop the timer when moving to the next question
  };

  // Update score and stop the timer/sound when "Right" is clicked
  const markRightAnswer = async () => {
    stopTimer(); // Stop the timer
    tick_pause(); // Stop ticking sound

    const updatedTeams = [...teams];
    updatedTeams[currentTeam].score += 1; // Update score for correct answers
    setTeams(updatedTeams); // Update state immediately
    await updateTeamScore(updatedTeams[currentTeam]);
    correctSound.play(); // Play sound for correct answer
    loadScores(); // Load updated scores
    // Do not move to the next question automatically
  };

  // Stop timer/sound when "Wrong" is clicked
  const markWrongAnswer = async () => {
    stopTimer(); // Stop the timer
    tick_pause(); // Stop ticking sound

    await updateTeamScore(teams[currentTeam]); // Just update the team score without changing it
    buzzSound.play(); // Play buzzer sound for wrong answer
    loadScores(); // Load updated scores
    // Do not move to the next question automatically
  };

  const updateTeamScore = async (team) => {
    await fetch('http://localhost:3000/updateScore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamName: team.teamName, score: team.score })
    });
  };

  const loadScores = () => {
    // Logic to update the scoreboard display
  };

  const resetScores = async () => {
    const updatedTeams = teams.map(team => ({ ...team, score: 0 }));
    setTeams(updatedTeams);
    await Promise.all(updatedTeams.map(team => updateTeamScore(team)));
    loadScores(); // Reload scores to reflect changes
  };

  const getTeamStyle = (team) => {
    const maxScore = Math.max(...teams.map(t => t.score));
    const minScore = Math.min(...teams.map(t => t.score));

    if (team.score === maxScore) return { backgroundColor: 'green' };
    if (team.score === minScore) return { backgroundColor: 'red' };
    return { backgroundColor: 'blue', transition: 'transform 0.2s' };
  };

  const handleDisqualify = (teamName) => {
    setDisqualifiedTeams(prev => [...prev, teamName]); // Add to disqualified teams
    setTeams(prev => prev.filter(team => team.teamName !== teamName)); // Remove from teams
    if (currentTeam >= teams.length) {
      setCurrentTeam(0); // Reset current team if the disqualified team was active
    }
  };

  // Function to handle team selection on button click
  const handleTeamClick = (teamIndex) => {
    setCurrentTeam(teamIndex); // Set the selected team
  };

  return (
    <div className="quiz-container">
      <video autoPlay muted loop className="bg-video">
        <source src="/assets/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="header">
          <div className="team-info">
            {teams.length > 0 ? (
              <h4>
                Selected Team: {teams[currentTeam]?.teamName || "Team not found"}
                <span style={{ color: 'red' }}> Score: {teams[currentTeam]?.score || 0}</span>
              </h4>
            ) : (
              <h4>Loading teams...</h4>
            )}
          </div>
          <div className="timer-container">
            <button className="start-btn" onClick={startTimer}>Start Timer</button>
            <div className="timer">
              {timeLeft === 0 ? "Time's up!" : `Time left: ${timeLeft}`}
            </div>
            <button className="stop-btn" onClick={stopTimer}>Stop Timer</button>
          </div>
        </div>
        <div className="question-container">
          <button className="prev-btn" onClick={() => setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length)}>Previous</button>
          <div className="question">{questions[currentQuestionIndex]?.question || "Loading question..."}</div>
          <button className="next-btn" onClick={nextQuestion}>Next</button>
        </div>
        <div className="button-container">
          <button className="right-answer-btn" onClick={markRightAnswer}>Right</button>
          <button className="wrong-answer-btn" onClick={markWrongAnswer}>Wrong</button>
          <button className="reset-btn" onClick={resetScores}>Reset Scores</button>
        </div>
        <div className="team-selection">
          <label>Select number of teams: </label>
          <select value={numberOfTeams} onChange={(e) => setNumberOfTeams(parseInt(e.target.value))}>
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="disqualify-container">
          <label>Disqualify Team: </label>
          <select onChange={(e) => handleDisqualify(e.target.value)}>
            <option value="">Select team</option>
            {teams.map((team, index) => (
              <option key={index} value={team.teamName}>{team.teamName}</option>
            ))}
          </select>
        </div>
        <div className="scoreboard">
          <h1>Scoreboard</h1>
          <div className="teams-list">
            {teams.map((team, index) => (
              <button
                key={index}
                style={getTeamStyle(team)}
                className={`team-btn ${currentTeam === index ? 'selected' : ''}`}
                onClick={() => handleTeamClick(index)} // Handle team click to select the team
              >
                {team.teamName} : {team.score}
              </button>
            ))}
          </div>
        </div>
        <button onClick={onBackToWelcome} className="back-to-welcome-btn">
          Back
        </button>
      </div>
    </div>
  );
}

export default Quiz;
