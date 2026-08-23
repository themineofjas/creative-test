// =====================================
// SECTION 1: FOUNDATIONAL ROLE PAIRS
// =====================================

const questions = [

  {
    sA: "I am happiest when daydreaming about unlimited possibilities without rules.",
    rA: "Ideator",
    sB: "I am happiest when sorting through a pile of clutter and bringing clean order to it.",
    rB: "Analyst"
  },

  {
    sA: "I prefer to be the voice of the group, getting everyone excited to start.",
    rA: "Catalyst",
    sB: "I prefer to quietly put my head down and manually finish the work myself.",
    rB: "Executor"
  },

  {
    sA: "I love smashing completely opposite styles together to create a weird, messy shock.",
    rA: "Alchemist",
    sB: "I love preserving traditions and collecting the absolute best examples of a classic.",
    rB: "Curator"
  },

  {
    sA: "When a conversation hits a tense wall, I instinctively check on how everyone feels.",
    rA: "Advocate",
    sB: "When a conversation hits a tense wall, I offer a wild, unexpected joke or alternative view.",
    rB: "Ideator"
  },

  {
    sA: "I feel secure when there is a clear, predictable plan or layout to follow.",
    rA: "Analyst",
    sB: "I feel secure when I am actively winging it and using my charm to navigate a situation.",
    rB: "Catalyst"
  },

  {
    sA: "I get an absolute thrill from crossing off the final item on a checklist.",
    rA: "Executor",
    sB: "I get an absolute thrill from tearing up the plan at the last minute to try a bold experiment.",
    rB: "Alchemist"
  },

  {
    sA: "I am highly sensitive to visual details, aesthetics, or the mood of a room.",
    rA: "Curator",
    sB: "I am highly sensitive to changes in a person's body language or vocal tone.",
    rB: "Advocate"
  },

  {
    sA: "I would rather spend an hour inventing an imaginary world or scenario.",
    rA: "Ideator",
    sB: "I would rather spend an hour telling a captive room a highly engaging story.",
    rB: "Catalyst"
  },

  {
    sA: "My brain naturally focuses on troubleshooting errors and mapping out constraints.",
    rA: "Analyst",
    sB: "My brain naturally focuses on physically putting pieces together until it works.",
    rB: "Executor"
  },

  {
    sA: "I don't mind rattling the cage or causing friction if it forces a breakthrough.",
    rA: "Alchemist",
    sB: "I will gladly modify my language to ensure everyone feels comfortable and safe.",
    rB: "Advocate"
  },

  {
    sA: "I excel at filtering the noise to find the absolute diamond in the rough.",
    rA: "Curator",
    sB: "I excel at generating a massive volume of choices, even if most are unusable.",
    rB: "Ideator"
  },

  {
    sA: "I am energized by massive, high-energy gatherings with loose connections.",
    rA: "Catalyst",
    sB: "I am energized by deep, intimate, one-on-one conversations.",
    rB: "Advocate"
  },

  {
    sA: "I would rather build a rough, working prototype right away, even if it looks ugly.",
    rA: "Executor",
    sB: "I would rather spend time reviewing things to ensure the presentation is flawless.",
    rB: "Curator"
  },

  {
    sA: "I respect data, history, and proven logical systems.",
    rA: "Analyst",
    sB: "I respect intuition, raw gut feelings, and happy accidents.",
    rB: "Alchemist"
  },

  {
    sA: "I lose interest once the initial concept is figured out.",
    rA: "Ideator",
    sB: "I only get interested once the manual building phase actually starts.",
    rB: "Executor"
  },

  {
    sA: "I look at things through a lens of utility, function, and sheer efficiency.",
    rA: "Analyst",
    sB: "I look at things through a lens of emotional impact, taste, and timeless beauty.",
    rB: "Curator"
  },

  {
    sA: "I naturally adapt my style to win over whatever crowd I am currently pitching to.",
    rA: "Catalyst",
    sB: "I stubbornly stick to my individual style, regardless of what the crowd thinks.",
    rB: "Alchemist"
  },

  {
    sA: "When working, I want to be left completely alone to get into a state of deep flow.",
    rA: "Executor",
    sB: "When working, I need to feel emotionally connected and aligned with my team.",
    rB: "Advocate"
  },

  {
    sA: "I solve problems by stepping back, detached, and analyzing the moving parts.",
    rA: "Analyst",
    sB: "I solve problems by stepping in, empathetic, and listening to the people.",
    rB: "Advocate"
  },

  {
    sA: "I am focused on the future growth, reach, and outer momentum of a project.",
    rA: "Catalyst",
    sB: "I am focused on honoring the deep roots, context, and history of a project.",
    rB: "Curator"
  },

  {
    sA: "I like to build elegant, harmonious ideas that make sense to people.",
    rA: "Ideator",
    sB: "I like to challenge lines, cross taboos, and shock the system into paying attention.",
    rB: "Alchemist"
  }

];


// =====================================
// ROLE RESULT TEXT
// =====================================

const profiles = {

  Advocate: `
    <h2 class="profile-title">
      The Advocate
    </h2>

    <div class="profile-sub">
      The Heart & Psychological Anchor of the Ecosystem
    </div>

    <h3 class="section-title">
       Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      You don't need to be a therapist to hold this space.
      If your friends instinctively call you when life crashes,
      or you read room tension instantly—you are an Advocate.
      Your brain uses perception to decode human needs.
      Your creativity is bound to empathy.
      You ensure the humans making a project feel supported and safe.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>Incubation Shield:</b>
      You shelter early, fragile ideas from being crushed by premature criticism.

      <br>

      <b>Resistance Navigator:</b>
      You spot creative blocks that are actually hidden fears and help people pass them.
    </p>
  `,


  Ideator: `
    <h2 class="profile-title">
      The Ideator
    </h2>

    <div class="profile-sub">
      The Spark & Blue-Sky Visionary
    </div>

    <h3 class="section-title">
       Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      If your mind naturally skips across a hundred random connections
      or you see a blank page as a playground—you are an Ideator.
      You use intellectual curiosity to feed an endless stream of
      original imagination, completely at peace with the unknown.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>Concept Incubator:</b>
      You excel at generating the seed concepts that give a project its distinct identity.

      <br>

      <b>Creative Lifeline:</b>
      When a group gets stuck, you throw out unexpected solutions to break the logjam.
    </p>
  `,


  Analyst: `
    <h2 class="profile-title">
      The Analyst
    </h2>

    <div class="profile-sub">
      The Structural Anchor & Strategist
    </div>

    <h3 class="section-title">
       Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      If you love putting complex layout items together,
      or intuitively spot logical flaws in plans—you are an Analyst.
      Your brain naturally strips away emotional noise to focus completely
      on structural frameworks, precision, and systemic clarity.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>Constraint Architect:</b>
      You deconstruct messy ideas into clear, realistic frameworks and parameters.

      <br>

      <b>Diagnostic Expert:</b>
      You can spot a structural error or financial risk weeks before anyone else.
    </p>
  `,


  Catalyst: `
    <h2 class="profile-title">
      The Catalyst
    </h2>

    <div class="profile-sub">
      The Mobilizer & High-Energy Engine
    </div>

    <h3 class="section-title">
       Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      If you get an absolute buzz from sharing an idea with a room full of
      strangers or naturally coordinate groups—you are a Catalyst.
      Your world is built on momentum, persuasive connection,
      and bringing structural concepts out into the light.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>External Bridge:</b>
      You pack collective ideas into stories the public understands.

      <br>

      <b>Momentum Starter:</b>
      You bring an infectious enthusiasm that pulls people cleanly out
      of creative slumps.
    </p>
  `,


  Executor: `
    <h2 class="profile-title">
      The Executor
    </h2>

    <div class="profile-sub">
      The Finisher & Tangible Builder
    </div>

    <h3 class="section-title">
       Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      If you get unmatched dopamine hits from physically checking off
      a finished task or prefer hands-on reality over endless abstract debate—you
      are an Executor. You are self-possessed, autonomous,
      and focused entirely on practical, physical delivery.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>Practical Engine:</b>
      You transform cloud-level dreams into completed physical assets.

      <br>

      <b>Deadline Keeper:</b>
      You ensure things remain efficient and actually cross the finish line.
    </p>
  `,


  Alchemist: `
    <h2 class="profile-title">
      The Alchemist
    </h2>

    <div class="profile-sub">
      The Disruptor & Experimental Maverick
    </div>

    <h3 class="section-title">
       Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      If you love smashing opposite styles together or question societal rules
      simply because "who decided that?"—you are an Alchemist.
      You use bold risk-taking and non-conformity to inject
      wild experiments into stale formulas.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>Status Quo Breaker:</b>
      You stop the group from getting comfortable or repetitive.

      <br>

      <b>Fusion Innovator:</b>
      Brilliant at blending distant mediums together into entirely
      unique creative hybrids.
    </p>
  `,


  Curator: `
    <h2 class="profile-title">
      The Curator
    </h2>

    <div class="profile-sub">
      The Taste Gatekeeper & Archivist
    </div>

    <h3 class="section-title">
      ✨ Your Way of Moving Through the World
    </h3>

    <p class="profile-text">
      If you are the person friends always ask for recommendations,
      or you feel a physical ache when an environment's visual aesthetic is off—you
      are a Curator. You hold an internal compass for heritage,
      quality, and timeless artistic beauty.
    </p>

    <h3 class="section-title">
       Your Group Superpowers
    </h3>

    <p class="profile-text">
      <b>Quality Filter:</b>
      You filter endless noise to pull out the single diamond in the rough.

      <br>

      <b>Identity Gatekeeper:</b>
      You make sure everything matches the highest aesthetic standards
      of your brand.
    </p>
  `

};


// =====================================
// APPLICATION STATE
// =====================================

let currentQuestionIndex = 0;

let scores = {
  Ideator: 0,
  Analyst: 0,
  Catalyst: 0,
  Executor: 0,
  Alchemist: 0,
  Curator: 0,
  Advocate: 0
};

let timerInterval;

let timeLeft = 45;


// =====================================
// START ASSESSMENT
// =====================================

function startTest() {

  document
    .getElementById("welcome-screen")
    .classList
    .add("hide");


  document
    .getElementById("quiz-screen")
    .classList
    .remove("hide");


  loadQuestion();

}


// =====================================
// LOAD CURRENT QUESTION
// =====================================

function loadQuestion() {

  if (currentQuestionIndex >= questions.length) {

    showResults();

    return;

  }


  const percent =
    (currentQuestionIndex / questions.length) * 100;


  document
    .getElementById("progress")
    .style
    .width = percent + "%";


  const q = questions[currentQuestionIndex];


  document
    .getElementById("btn-sideA")
    .textContent = q.sA;


  document
    .getElementById("btn-sideB")
    .textContent = q.sB;


  clearInterval(timerInterval);


  timeLeft = 45;


  updateTimerDisplay();


  timerInterval = setInterval(() => {

    timeLeft--;


    updateTimerDisplay();


    if (timeLeft <= 0) {

      clearInterval(timerInterval);

      currentQuestionIndex++;

      loadQuestion();

    }

  }, 1000);

}


// =====================================
// TIMER DISPLAY
// =====================================

function updateTimerDisplay() {

  const formattedTime =
    timeLeft < 10
      ? `0${timeLeft}`
      : timeLeft;


  document
    .getElementById("timer")
    .textContent = `⏱️ 00:${formattedTime}`;

}


// =====================================
// RECORD ANSWER
// =====================================

function handleAnswer(choice) {

  clearInterval(timerInterval);


  const q = questions[currentQuestionIndex];


  if (choice === "A") {

    scores[q.rA] += 1;

  }


  if (choice === "B") {

    scores[q.rB] += 1;

  }


  currentQuestionIndex++;


  loadQuestion();

}


// =====================================
// SHOW RESULTS
// =====================================

function showResults() {

  clearInterval(timerInterval);


  document
    .getElementById("quiz-screen")
    .classList
    .add("hide");


  document
    .getElementById("results-screen")
    .classList
    .remove("hide");


  const sortedRoles =
    Object.keys(scores)
      .sort((a, b) => scores[b] - scores[a]);


  const dominantRole = sortedRoles[0];


  document
    .getElementById("results-content")
    .innerHTML = profiles[dominantRole];

}
