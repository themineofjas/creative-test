// =====================================
// SECTION 1: FOUNDATIONAL ROLE PAIRS
// Preferred contribution in a group
// =====================================

const questions = [

  // Ideator vs Analyst
  {
    sA: "When a group is figuring out what to do, I naturally start expanding the possibilities and making connections between different ideas.",
    rA: "Ideator",
    sB: "When a group is figuring out what to do, I naturally start organizing the information and identifying the parts we need to understand.",
    rB: "Analyst"
  },

  // Catalyst vs Executor
  {
    sA: "Once a group has a direction, I naturally help create momentum by getting people aligned, involved, and ready to move.",
    rA: "Catalyst",
    sB: "Once a group has a direction, I naturally help create momentum by turning the plan into concrete tasks and visible progress.",
    rB: "Executor"
  },

  // Alchemist vs Curator
  {
    sA: "When a group already has something promising, I naturally look for unusual combinations or changes that could transform it into something new.",
    rA: "Alchemist",
    sB: "When a group already has something promising, I naturally look for what should be kept, removed, or refined so the whole thing feels stronger.",
    rB: "Curator"
  },

  // Advocate vs Ideator
  {
    sA: "Early in a collaboration, I naturally pay attention to what the people involved need in order to contribute well together.",
    rA: "Advocate",
    sB: "Early in a collaboration, I naturally pay attention to what ideas, possibilities, or directions the group has not considered yet.",
    rB: "Ideator"
  },

  // Analyst vs Catalyst
  {
    sA: "At the beginning of a group project, I naturally help clarify the goal, constraints, resources, and how the pieces fit together.",
    rA: "Analyst",
    sB: "At the beginning of a group project, I naturally help turn the shared goal into energy, commitment, and forward movement.",
    rB: "Catalyst"
  },

  // Executor vs Alchemist
  {
    sA: "When a group has a rough idea, I naturally want to start turning it into something concrete that we can use, test, or build on.",
    rA: "Executor",
    sB: "When a group has a rough idea, I naturally want to experiment with it, alter it, or combine it with something unexpected.",
    rB: "Alchemist"
  },

  // Curator vs Advocate
  {
    sA: "As a group develops something, I naturally notice whether the choices fit together and support a clear overall identity.",
    rA: "Curator",
    sB: "As a group develops something, I naturally notice whether people feel heard, supported, and able to contribute effectively.",
    rB: "Advocate"
  },

  // Ideator vs Catalyst
  {
    sA: "When a promising direction appears, I naturally want to keep exploring what else it could become or connect to.",
    rA: "Ideator",
    sB: "When a promising direction appears, I naturally want to help people understand it, get behind it, and move it forward.",
    rB: "Catalyst"
  },

  // Analyst vs Executor
  {
    sA: "After a group chooses a goal, I naturally want to map out what is required, what depends on what, and where problems might appear.",
    rA: "Analyst",
    sB: "After a group chooses a goal, I naturally want to take the next concrete step and begin turning the plan into something real.",
    rB: "Executor"
  },

  // Alchemist vs Advocate
  {
    sA: "In a collaborative group, I naturally contribute by questioning assumptions and introducing perspectives that may change how we see the work.",
    rA: "Alchemist",
    sB: "In a collaborative group, I naturally contribute by noticing the human dynamics and helping create conditions where people can participate honestly.",
    rB: "Advocate"
  },

  // Curator vs Ideator
  {
    sA: "When a group has many possible ideas, I naturally want to identify which ones are strongest, most fitting, or worth developing.",
    rA: "Curator",
    sB: "When a group has many possible ideas, I naturally want to make more connections and see what additional possibilities we can generate.",
    rB: "Ideator"
  },

  // Catalyst vs Advocate
  {
    sA: "When people come together around a shared project, I naturally help create movement by connecting people to the goal and encouraging participation.",
    rA: "Catalyst",
    sB: "When people come together around a shared project, I naturally help strengthen the relationships and trust that allow people to contribute well.",
    rB: "Advocate"
  },

  // Executor vs Curator
  {
    sA: "As a group approaches a finished result, I naturally focus on making sure the essential pieces are completed and usable.",
    rA: "Executor",
    sB: "As a group approaches a finished result, I naturally focus on making sure the final choices feel intentional, coherent, and true to the project.",
    rB: "Curator"
  },

  // Analyst vs Alchemist
  {
    sA: "When a group inherits an existing approach, I naturally want to understand how it works and where its structure could be improved.",
    rA: "Analyst",
    sB: "When a group inherits an existing approach, I naturally want to question its assumptions and experiment with doing it differently.",
    rB: "Alchemist"
  },

  // Ideator vs Executor
  {
    sA: "When a group starts with a blank page, I naturally want to help generate directions, concepts, and possibilities.",
    rA: "Ideator",
    sB: "When a group starts with a blank page, I naturally want to help create an early version we can actually see, use, or respond to.",
    rB: "Executor"
  },

  // Analyst vs Curator
  {
    sA: "When reviewing the group's work, I naturally notice whether the reasoning, structure, and practical requirements hold together.",
    rA: "Analyst",
    sB: "When reviewing the group's work, I naturally notice whether the selection, presentation, and overall identity hold together.",
    rB: "Curator"
  },

  // Catalyst vs Alchemist
  {
    sA: "When a group needs a new direction, I naturally want to build enthusiasm and organize people around a path forward.",
    rA: "Catalyst",
    sB: "When a group needs a new direction, I naturally want to disrupt the existing pattern and introduce an experiment that could change the work.",
    rB: "Alchemist"
  },

  // Executor vs Advocate
  {
    sA: "When several people need help moving a project forward, I naturally contribute by taking ownership of concrete work that needs to get done.",
    rA: "Executor",
    sB: "When several people need help moving a project forward, I naturally contribute by noticing people's needs, capacity, and ability to work well together.",
    rB: "Advocate"
  },

  // Analyst vs Advocate
  {
    sA: "When a group sees a situation differently, I naturally help by separating the issues, identifying what we know, and clarifying the problem.",
    rA: "Analyst",
    sB: "When a group sees a situation differently, I naturally help by understanding the perspectives, concerns, and needs behind people's positions.",
    rB: "Advocate"
  },

  // Catalyst vs Curator
  {
    sA: "When a group is ready to share its work with others, I naturally think about how to communicate it, attract interest, and build participation.",
    rA: "Catalyst",
    sB: "When a group is ready to share its work with others, I naturally think about whether the presentation accurately reflects its quality and identity.",
    rB: "Curator"
  },

  // Ideator vs Alchemist
  {
    sA: "When a group has one workable idea, I naturally want to generate additional directions, possibilities, or connections around it.",
    rA: "Ideator",
    sB: "When a group has one workable idea, I naturally want to take it apart, recombine it, or test an unconventional variation of it.",
    rB: "Alchemist"
  },
  
  // =====================================
// SECTION 2: CRISIS & FRICTION PAIRS
// =====================================

{
  sA: "When a project starts falling apart, my first instinct is to imagine several new ways it could still work.",
  rA: "Ideator",
  sB: "When a project starts falling apart, my first instinct is to identify exactly where the breakdown began.",
  rB: "Analyst"
},

{
  sA: "When a group gets discouraged, I help by introducing a fresh possibility or new idea.",
  rA: "Ideator",
  sB: "When a group gets discouraged, I help by encouraging, motivating, and/or getting people moving again.",
  rB: "Catalyst"
},

{
  sA: "When a deadline suddenly gets tighter, I look for a different approach that might open up more options.",
  rA: "Ideator",
  sB: "When a deadline suddenly gets tighter, I narrow my focus and start completing the most essential tasks.",
  rB: "Executor"
},

{
  sA: "When the obvious solution fails, I branch outward and generate or find several alternative possibilities.",
  rA: "Ideator",
  sB: "When the obvious solution fails, I question assumptions behind it and try a radically different route.",
  rB: "Alchemist"
},

{
  sA: "When a project loses direction, I start thinking of what possibilities we have not explored yet.",
  rA: "Ideator",
  sB: "When a project loses direction, I return to the strongest references or examples to get back to the core identity.",
  rB: "Curator"
},

{
  sA: "When conflict blocks progress, I try to open a new path forward by introducing fresh ideas.",
  rA: "Ideator",
  sB: "When conflict blocks progress, I try to understand what the people involved need before moving forward.",
  rB: "Advocate"
},

{
  sA: "When everyone is confused, I organize the facts, constraints, and resources until the problem becomes clear.",
  rA: "Analyst",
  sB: "When everyone is confused, I get people aligned around an immediate direction so the group can regain momentum.",
  rB: "Catalyst"
},

{
  sA: "When something goes wrong close to a deadline, I want to diagnose the cause before making the next move.",
  rA: "Analyst",
  sB: "When something goes wrong close to a deadline, I want to identify the next concrete task and start doing it.",
  rB: "Executor"
},

{
  sA: "When a rule or limitation creates a problem, I'd immediately attempt to solve the problem within the real constraints.",
  rA: "Analyst",
  sB: "When a rule or limitation creates a problem, I'd immediately question whether a constraint is real or there at all.",
  rB: "Alchemist"
},

{
  sA: "When quality starts slipping, I check whether the process, or standards are being followed consistently for our desired result.",
  rA: "Analyst",
  sB: "When quality starts slipping, I check whether the work still feels coherent, intentional, and true to its identity.",
  rB: "Curator"
},

{
  sA: "When a team problem becomes complicated, I separate it into smaller parts so we can see what is actually happening.",
  rA: "Analyst",
  sB: "When a team problem becomes complicated, I pay attention to the emotional dynamics that may be affecting the work.",
  rB: "Advocate"
},

{
  sA: "When a project stalls, I naturally start coordinating people, having conversations, and trying moves to restart momentum.",
  rA: "Catalyst",
  sB: "When a project stalls, I naturally look for the next concrete task I can personally complete to move it forward.",
  rB: "Executor"
},

{
  sA: "When everyone becomes attached to one direction, I try to rebuild excitement and commitment around where we are going.",
  rA: "Catalyst",
  sB: "When everyone becomes attached to one direction, I am willing to introduce a bold alternative to the plan even at inconvenient times.",
  rB: "Alchemist"
},

{
  sA: "When outside support begins fading, I focus on communicating the project in a way that makes people care again.",
  rA: "Catalyst",
  sB: "When outside support begins fading, I focus on protecting what makes the project distinctive rather than external support or attention.",
  rB: "Curator"
},

{
  sA: "When a group loses confidence, I can try to rally the group and/or individuals around what we can still accomplish together.",
  rA: "Catalyst",
  sB: "When a group loses confidence, I can try to make sure each individual feels heard, supported, and appreciated to contribute to the group.",
  rB: "Advocate"
},

{
  sA: "When the original plan becomes impossible, I choose the most workable alternative and begin building on it.",
  rA: "Executor",
  sB: "When the original plan becomes impossible, I use the disruption as permission to experiment with something alternative or different.",
  rB: "Alchemist"
},

{
  sA: "When time is running out, I focus on getting the strongest or most efficient workable version finished.",
  rA: "Executor",
  sB: "When time is running out, I focus on removing anything that weakens the quality or branding of the final work.",
  rB: "Curator"
},

{
  sA: "When teammates become overwhelmed, I tend to reduce the pressure by taking responsibility for concrete tasks that need doing.",
  rA: "Executor",
  sB: "When teammates become overwhelmed, I tend to reduce the pressure by understanding people's capacity and helping the group adjust.",
  rB: "Advocate"
},

{
  sA: "When a project starts feeling stale or predictable, I want to combine unlikely elements and push it somewhere unfamiliar.",
  rA: "Alchemist",
  sB: "When a project starts feeling stale or predictable, I want to revisit strong references and identify what is worth preserving.",
  rB: "Curator"
},

{
  sA: "When everyone is avoiding an uncomfortable issue, I am willing to name it directly and force the issue into the open.",
  rA: "Alchemist",
  sB: "When everyone is avoiding an uncomfortable issue, I try to create enough trust for people to say what they have not been saying.",
  rB: "Advocate"
},

{
  sA: "When people disagree about what 'good' looks like, I look for the standard, context, or reference that can guide the decision.",
  rA: "Curator",
  sB: "When people disagree about what 'good' looks like, I look for the underlying needs and values shaping each person's position.",
  rB: "Advocate"
},
  // =====================================
// SECTION 3: ENERGY & BURNOUT MAPPINGS
// =====================================

{
  sA: "I come away energized after having space to explore possibilities, make connections, and follow ideas wherever they lead.",
  rA: "Ideator",
  sB: "I come away energized after untangling something complicated and finally understanding how all the pieces fit together.",
  rB: "Analyst"
},

{
  sA: "I feel most alive when I have room to wander mentally and discover ideas I did not expect.",
  rA: "Ideator",
  sB: "I feel most alive when I can share an idea with other people and watch their excitement build.",
  rB: "Catalyst"
},

{
  sA: "I gain energy from beginning with an open question and imagining what might be possible.",
  rA: "Ideator",
  sB: "I gain energy from taking something unfinished and steadily turning it into something real.",
  rB: "Executor"
},

{
  sA: "I am refreshed by having enough freedom to follow interesting ideas in several directions.",
  rA: "Ideator",
  sB: "I am refreshed by having enough freedom to experiment, break patterns, and try things no one expects.",
  rB: "Alchemist"
},

{
  sA: "I can happily spend hours generating concepts, connections, and possibilities without needing to settle on one immediately.",
  rA: "Ideator",
  sB: "I can happily spend hours exploring references, examples, and details until I understand what belongs and what does not.",
  rB: "Curator"
},

{
  sA: "A good creative day leaves me energized because my mind had plenty of room to explore.",
  rA: "Ideator",
  sB: "A good creative day leaves me energized because I felt genuinely connected to the people I was working with.",
  rB: "Advocate"
},

{
  sA: "I enjoy sustained concentration when I am organizing information, solving problems, or improving a system.",
  rA: "Analyst",
  sB: "I enjoy sustained activity when I am coordinating people, communicating ideas, or keeping momentum high.",
  rB: "Catalyst"
},

{
  sA: "I leave work satisfied when I have made something more logical, reliable, or clearly organized.",
  rA: "Analyst",
  sB: "I leave work satisfied when I can point to something concrete that I personally completed.",
  rB: "Executor"
},

{
  sA: "I am energized by discovering the underlying logic that makes a complicated situation finally make sense.",
  rA: "Analyst",
  sB: "I am energized by discovering what happens when I challenge the logic everyone else has been taking for granted.",
  rB: "Alchemist"
},

{
  sA: "I enjoy spending long periods refining the structure of something until every part has a clear purpose.",
  rA: "Analyst",
  sB: "I enjoy spending long periods refining the selection, presentation, or details until everything feels right together.",
  rB: "Curator"
},

{
  sA: "I recharge through quiet problem-solving where I can think clearly and make sense of complexity.",
  rA: "Analyst",
  sB: "I recharge through meaningful conversations where people can be open, understood, and honest with one another.",
  rB: "Advocate"
},

{
  sA: "I gain energy when there is movement around me—people responding, conversations happening, and something gaining traction.",
  rA: "Catalyst",
  sB: "I gain energy when I can settle into the work itself and make visible progress without having to keep talking about it.",
  rB: "Executor"
},

{
  sA: "I am at my best when I can build enthusiasm around a direction and help other people want to participate.",
  rA: "Catalyst",
  sB: "I am at my best when I can inject something unexpected that changes the direction completely.",
  rB: "Alchemist"
},

{
  sA: "A project becomes more exciting to me as more people begin noticing it, discussing it, or joining in.",
  rA: "Catalyst",
  sB: "A project becomes more exciting to me as its voice, references, and overall identity become increasingly distinctive.",
  rB: "Curator"
},

{
  sA: "I feel restored when I am around people who are energized, responsive, and ready to make something happen.",
  rA: "Catalyst",
  sB: "I feel restored when I am around people who trust one another enough to be genuine and emotionally present.",
  rB: "Advocate"
},

{
  sA: "I can stay engaged for a long time when there is a clear task in front of me and I can keep making tangible progress.",
  rA: "Executor",
  sB: "I can stay engaged for a long time when I am allowed to improvise, test strange ideas, and see what happens.",
  rB: "Alchemist"
},

{
  sA: "I get a deep sense of satisfaction from finishing something usable, functional, and complete.",
  rA: "Executor",
  sB: "I get a deep sense of satisfaction from refining something until its quality, presentation, and character feel exactly right.",
  rB: "Curator"
},

{
  sA: "I often recover my energy by getting away from discussion and doing something practical with my hands or attention.",
  rA: "Executor",
  sB: "I often recover my energy by reconnecting with someone, talking things through, or restoring a sense of mutual understanding.",
  rB: "Advocate"
},

{
  sA: "I feel energized when I can take familiar ingredients and combine them into something people have not seen before.",
  rA: "Alchemist",
  sB: "I feel energized when I can discover, preserve, or present something unusually good that deserves more attention.",
  rB: "Curator"
},

{
  sA: "I feel most engaged with a group when there is enough freedom to challenge assumptions and say what everyone else is avoiding.",
  rA: "Alchemist",
  sB: "I feel most engaged with a group when there is enough trust for people to be candid without being dismissed or shut down.",
  rB: "Advocate"
},

{
  sA: "I can lose track of time while selecting, comparing, arranging, or refining things until the whole experience feels coherent.",
  rA: "Curator",
  sB: "I can lose track of time while listening closely to people and helping create an environment where they can do their best work.",
  rB: "Advocate"
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
       Your Way of Moving Through the World
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
