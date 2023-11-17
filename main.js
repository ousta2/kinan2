const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 6,
      lang:0,
      start:0,
      questions: [[
        {
          question:
            "The chance a pedestrian to die when hit by a car at 50 km/h is:",
          answers: { a: "5%", b: "25%", c: "15%"},
          correctAnswer: "b",
        },
        {
          question: "While approaching a pedestrian crossing I should:",
          answers: { a: "Speed up to get through quickly", b: "Sound your horn to alert pedestrians", c: "Slow down and let pedestrian to cross" },
          correctAnswer: "c",
        },
        {
          question:
          "Primary purpose of wearing a seat belt is?",
          answers: { a: "To avoid a traffic fine", b: "To silence beeping sounds", c: "To enhance safety in case of an accident"},
          correctAnswer: "c",
        },
        {
          question:
          "How many people die monthly in road accidents in Abu Dhabi Emirate?",
          answers: { a: "27", b: "53", c: "11"},
          correctAnswer: "c",
        },
        {
          question:
          "Rear-end accidents are very common and can be reduced by:",
          answers: { a: "Maintaining a safe following distance", b: "Paying attention to the road ahead", c: "Using brake lights effectively."},
          correctAnswer: "a",
        },
        {
          question:
          "Use of a mobile phone while driving is dangerous because:",
          answers: { a: "It decreases the risk of accidents", b: "It can make you to pay attention", c: "It may result in loss of focus on the road"},
          correctAnswer: "c",
        }
      ],
      [
        {
          question:
            "​​احتمال وفاة أحد المشاة عندما تصدمه سيارة تسير بسرعة 50كم/ساعة؟",
            answers: { a: "5%", b: "25%", c: "15%"},
          correctAnswer: "b",
        },
        {
          question: "ماذا يجب عليك فعله عند الاقتراب من مكان عبور المشاة؟",
          answers: { a: "الإسراع للوصول بسرعة", b: "أطلق بوق السيارة لتنبيه المشاة", c: "إبطاء السرعة والسماح للمشاة بالعبور"},
          correctAnswer: "c",
        },
        {
          question:
            "الغرض الأساسي من ارتداء حزام الأمان في السيارة؟",
          answers: { a: "لتجنب الغرامة المرورية", b: "لعدم سماع الأصوات المزعجة" ,c :"لضمان السلامة في حالة حدوث تصادم" },
          correctAnswer: "c",
        },
        {
          question:
            "كم عدد وفيات حوادث الطرق شهريا في ابوظبي؟",
            answers: { a: "27", b: "53", c: "11"},
          correctAnswer: "c",
        },
        {
          question:
             ":حوادث الصدم الخلفي شائعة جدًا ويمكن الحد منها عن طريق",
            answers: { a: "الحفاظ على مسافة أمان كافية وآمنة", b: "الانتباه إلى الطريق أمامك", c: "استخدام أضواء الفرامل بشكل فعال"},
          correctAnswer: "a",
        },
        {
          question:
           "يعد استخدام الهاتف المحمول أثناء القيادة أمرًا خطيرًا؟",
            answers: { a: "لأنه يقلل من خطر وقوع الحوادث", b: " يمكن أن يجعلك تنتبه", c: " لأنه يؤدي إلى فقدان التركيز على الطريق"},
          correctAnswer: "c",
        },
      ]
    
    ],
     
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.lang][this.idx].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
      document.querySelectorAll("input").forEach((el) => (el.checked = false));
    },
    showResults() {
      this.idx++;
    },
    resetQuiz() {
      this.start = 0;
      this.idx = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
    changeLang(s){
      this.lang = s;
      this.start = 1;
    }
  },
});

app.mount("#app");
