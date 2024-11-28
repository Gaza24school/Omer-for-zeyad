const questions = [
  {
    question: "كم عدد ركعات صلاة الفجر؟",
    options: ["ركعتان", "أربع ركعات", "ثلاث ركعات"],
    correct: 0,
  },
  {
    question: "متى يبدأ وقت صلاة العصر؟",
    options: ["بعد الظهر مباشرة", "عندما يكون ظل كل شيء مثله", "قبل المغرب بنصف ساعة"],
    correct: 1,
  },
  {
    question: "ما هو الركن الثالث من أركان الإسلام؟",
    options: ["الزكاة", "الصلاة", "الصيام"],
    correct: 0,
  },
  {
    question: "ما هي أول ليلة من ليالي رمضان تسمى؟",
    options: ["ليلة المغفرة", "ليلة القدر", "ليلة الرؤية"],
    correct: 2,
  },
  {
    question: "كم مرة يجب أداء الحج في العمر؟",
    options: ["مرة واحدة", "مرتين", "كل عام"],
    correct: 0,
  },
  {
    question: "ما هو وقت السحور؟",
    options: ["قبل صلاة الفجر", "بعد صلاة العشاء", "وقت العصر"],
    correct: 0,
  },
  {
    question: "كم عدد ركعات صلاة الجمعة؟",
    options: ["ركعتان", "أربع ركعات", "ست ركعات"],
    correct: 0,
  },
  {
    question: "ما هي صيغة التشهد في الصلاة؟",
    options: ["السلام عليكم", "التحيات لله", "الله أكبر"],
    correct: 1,
  },
  {
    question: "ما هو الركن الأول من أركان الإسلام؟",
    options: ["الشهادة", "الصلاة", "الحج"],
    correct: 0,
  },
  {
    question: "ما هي زكاة الفطر؟",
    options: ["مال", "طعام", "ملابس"],
    correct: 1,
  },
  {
    question: "ما هو الركن الرابع من أركان الإسلام؟",
    options: ["الحج", "الزكاة", "الصيام"],
    correct: 2,
  },
  {
    question: "كم مرة ذكر الصيام في القرآن الكريم؟",
    options: ["مرة واحدة", "مرتين", "أكثر من 3 مرات"],
    correct: 2,
  },
  {
    question: "ما حكم صلاة الجماعة؟",
    options: ["سنة", "واجب", "مستحب"],
    correct: 1,
  },
  {
    question: "ما هي الليلة التي أنزل فيها القرآن الكريم؟",
    options: ["ليلة القدر", "ليلة الإسراء", "ليلة المعراج"],
    correct: 0,
  },
  {
    question: "ما هو الدعاء الذي يقال عند الإفطار؟",
    options: ["اللهم لك صمت", "الحمد لله", "سبحان الله"],
    correct: 0,
  },
  {
    question: "ما هو حكم من ترك الصلاة عمدًا؟",
    options: ["كافر", "عاصٍ", "صادق"],
    correct: 0,
  },
  {
    question: "كم عدد ركعات صلاة التراويح؟",
    options: ["8 ركعات", "12 ركعة", "20 ركعة"],
    correct: 2,
  },
  {
    question: "ما هي أوقات الصلاة اليومية؟",
    options: ["2", "3", "5"],
    correct: 2,
  },
  {
    question: "ما هو عدد أيام عيد الأضحى؟",
    options: ["يوم واحد", "ثلاثة أيام", "أربعة أيام"],
    correct: 1,
  },
  {
    question: "ما هي الكعبة؟",
    options: ["بيت الله الحرام", "بيت النبي", "مسجد"],
    correct: 0,
  },
  {
    question: "ما هو حكم الصيام في رمضان؟",
    options: ["فرض", "سنة", "مستحب"],
    correct: 0,
  },
  {
    question: "ما هو الدعاء في الركوع؟",
    options: ["سبحان ربي العظيم", "الله أكبر", "لا إله إلا الله"],
    correct: 0,
  },
  {
    question: "متى يبدأ وقت الحج؟",
    options: ["شهر ذو الحجة", "شهر رمضان", "شهر محرم"],
    correct: 0,
  },
  {
    question: "كم عدد أشواط الطواف حول الكعبة؟",
    options: ["7 أشواط", "5 أشواط", "10 أشواط"],
    correct: 0,
  },
  {
    question: "ما هي صيغة التكبير في العيد؟",
    options: ["الله أكبر الله أكبر", "الحمد لله", "لا إله إلا الله"],
    correct: 0,
  },
  {
    question: "ما حكم صيام الست من شوال؟",
    options: ["سنة", "فرض", "مستحب"],
    correct: 2,
  },
  {
    question: "ما هو اسم الميقات لأهل المدينة؟",
    options: ["ذو الحليفة", "ذي قار", "منى"],
    correct: 0,
  },
  {
    question: "كم عدد ركعات صلاة قيام الليل؟",
    options: ["غير محدد", "8 ركعات", "12 ركعة"],
    correct: 0,
  },
  {
    question: "ما هي صيغة التسبيح بعد الصلاة؟",
    options: ["سبحان الله 33", "الحمد لله 50", "الله أكبر 20"],
    correct: 0,
  },
  {
    question: "ما هو حكم الزكاة؟",
    options: ["فرض", "مستحب", "سنة"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const questionObj = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <h3>${questionObj.question}</h3>
    ${questionObj.options
      .map(
        (option, index) =>
          `<button class="btn option" onclick="checkAnswer(${index})">${option}</button>`
      )
      .join("")}
  `;
}

function checkAnswer(selectedIndex) {
  const questionObj = questions[currentQuestionIndex];
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((btn, index) => {
    btn.disabled = true;
    btn.style.backgroundColor =
      index === questionObj.correct ? "green" : index === selectedIndex ? "red" : "";
  });
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    questionContainer.innerHTML = "<h3>انتهت الأسئلة! شكراً لمشاركتك.</h3>";
    nextBtn.style.display = "none";
  }
});

loadQuestion();