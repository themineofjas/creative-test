/// =====================================
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
    sA: "Once a group has a direction, I naturally help create momentum by coordinating people around what we are trying to accomplish.",
    rA: "Catalyst",
    sB: "Once a group has a direction, I naturally help create momentum by turning what we decided into concrete work that can be completed.",
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
    sA: "Early in a collaboration, I naturally notice what would help the people involved communicate, participate, and work well together.",
    rA: "Advocate",
    sB: "Early in a collaboration, I naturally notice ideas, connections, and possible directions the group has not explored yet.",
    rB: "Ideator"
  },

  // Analyst vs Catalyst
  {
    sA: "At the beginning of a group project, I naturally help make the situation clearer by organizing what we know and how the pieces relate.",
    rA: "Analyst",
    sB: "At the beginning of a group project, I naturally help create movement by connecting people to a direction and getting participation started.",
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
    sA: "In a collaborative group, I naturally notice assumptions or patterns that could be challenged to change the work.",
    rA: "Alchemist",
    sB: "In a collaborative group, I naturally notice interpersonal patterns that could be adjusted to help people work better together.",
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
    sA: "When people come together around a shared project, I naturally help connect people to the goal, opportunities, and next moves.",
    rA: "Catalyst",
    sB: "When people come together around a shared project, I naturally help strengthen the trust, communication, and working relationships between them.",
    rB: "Advocate"
  },

  // Executor vs Curator
  {
    sA: "As a group approaches a finished result, I naturally focus on making sure the essential pieces are completed and ready to use.",
    rA: "Executor",
    sB: "As a group approaches a finished result, I naturally focus on making sure the final choices fit together and clearly represent what we intended.",
    rB: "Curator"
  },

  // Analyst vs Alchemist
  {
    sA: "When a group inherits an existing approach, I naturally want to understand how it works, where it breaks down, and what could be improved.",
    rA: "Analyst",
    sB: "When a group inherits an existing approach, I naturally want to question its assumptions and explore substantially different ways of doing it.",
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
    sA: "When a group needs a new direction, I naturally focus on finding a direction people can understand, commit to, and move around.",
    rA: "Catalyst",
    sB: "When a group needs a new direction, I naturally focus on introducing an experiment or reframing that could change how we see the work.",
    rB: "Alchemist"
  },

  // Executor vs Advocate
  {
    sA: "When a group needs support moving forward, I naturally notice concrete responsibilities I can take ownership of.",
    rA: "Executor",
    sB: "When a group needs support moving forward, I naturally notice adjustments in communication, workload, or coordination that could help people contribute better.",
    rB: "Advocate"
  },

  // Analyst vs Advocate
  {
    sA: "When a group sees a situation differently, I naturally try to clarify the issues, evidence, and relationships between the parts of the problem.",
    rA: "Analyst",
    sB: "When a group sees a situation differently, I naturally try to clarify the perspectives, concerns, and relationships between the people involved.",
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
// SECTION 2: GROUP CONTRIBUTION UNDER FRICTION
// =====================================

// Ideator vs Analyst
{
  sA: "When a group gets stuck on a problem, I naturally start generating different ways we might approach it.",
  rA: "Ideator",
  sB: "When a group gets stuck on a problem, I naturally start breaking it apart to understand what is actually causing it.",
  rB: "Analyst"
},

// Ideator vs Catalyst
{
  sA: "When a group loses momentum, I naturally help by opening up fresh possibilities for what we could try next.",
  rA: "Ideator",
  sB: "When a group loses momentum, I naturally help by reconnecting people to a direction and getting movement started again.",
  rB: "Catalyst"
},

// Ideator vs Executor
{
  sA: "When a deadline suddenly changes the plan, I naturally look for alternative routes or possibilities we have not considered.",
  rA: "Ideator",
  sB: "When a deadline suddenly changes the plan, I naturally identify what still needs to be completed and start moving through it.",
  rB: "Executor"
},

// Ideator vs Alchemist
{
  sA: "When the group's first solution fails, I naturally generate several other possible solutions.",
  rA: "Ideator",
  sB: "When the group's first solution fails, I naturally question the original assumptions and try changing the approach itself.",
  rB: "Alchemist"
},

// Ideator vs Curator
{
  sA: "When a project loses direction, I naturally look for unexplored possibilities that might give us somewhere new to go.",
  rA: "Ideator",
  sB: "When a project loses direction, I naturally look back at its strongest ideas, references, and choices to recover what should guide us.",
  rB: "Curator"
},

// Ideator vs Advocate
{
  sA: "When disagreement starts blocking progress, I naturally introduce new possibilities that might help the group find another way forward.",
  rA: "Ideator",
  sB: "When disagreement starts blocking progress, I naturally try to understand what people are reacting to or needing before we decide how to move forward.",
  rB: "Advocate"
},

// Analyst vs Catalyst
{
  sA: "When everyone is confused about what to do next, I naturally organize the facts, constraints, and options until the situation becomes clearer.",
  rA: "Analyst",
  sB: "When everyone is confused about what to do next, I naturally help the group choose a direction and regain forward momentum.",
  rB: "Catalyst"
},

// Analyst vs Executor
{
  sA: "When something goes wrong near a deadline, I naturally want to understand the source of the problem before deciding what to change.",
  rA: "Analyst",
  sB: "When something goes wrong near a deadline, I naturally want to identify the most important action we can take immediately.",
  rB: "Executor"
},

// Analyst vs Alchemist
{
  sA: "When an existing rule or limitation causes trouble, I naturally work out what the constraint actually is and how we can operate within it.",
  rA: "Analyst",
  sB: "When an existing rule or limitation causes trouble, I naturally question whether we need to keep working within that constraint at all.",
  rB: "Alchemist"
},

// Analyst vs Curator
{
  sA: "When the quality of the work starts slipping, I naturally check whether the process, requirements, or structure has broken down.",
  rA: "Analyst",
  sB: "When the quality of the work starts slipping, I naturally check whether our choices still fit the project's intended character and standard.",
  rB: "Curator"
},

// Analyst vs Advocate
{
  sA: "When a team problem becomes complicated, I naturally separate the issues so we can identify what is actually happening.",
  rA: "Analyst",
  sB: "When a team problem becomes complicated, I naturally pay attention to the people's perspectives, needs, and relationships that may be affecting it.",
  rB: "Advocate"
},

// Catalyst vs Executor
{
  sA: "When a project stalls, I naturally start reconnecting people, clarifying the immediate direction, and rebuilding momentum.",
  rA: "Catalyst",
  sB: "When a project stalls, I naturally identify something concrete that can be completed and begin moving the work forward.",
  rB: "Executor"
},

// Catalyst vs Alchemist
{
  sA: "When the group becomes too attached to one direction, I naturally try to renew people's commitment to a clear path forward.",
  rA: "Catalyst",
  sB: "When the group becomes too attached to one direction, I naturally introduce an alternative that could change how we are approaching the work.",
  rB: "Alchemist"
},

// Catalyst vs Curator
{
  sA: "When outside interest in a project begins fading, I naturally think about how we can communicate it differently and reconnect people to it.",
  rA: "Catalyst",
  sB: "When outside interest in a project begins fading, I naturally examine whether what we are presenting still clearly expresses what makes the project worth caring about.",
  rB: "Curator"
},

// Catalyst vs Advocate
{
  sA: "When a group loses confidence, I naturally help people reconnect to what we can still accomplish and encourage movement.",
  rA: "Catalyst",
  sB: "When a group loses confidence, I naturally help people feel heard, supported, and able to contribute again.",
  rB: "Advocate"
},

// Executor vs Alchemist
{
  sA: "When the original plan becomes impossible, I naturally choose the strongest workable alternative and start building from there.",
  rA: "Executor",
  sB: "When the original plan becomes impossible, I naturally use the disruption as an opportunity to test a substantially different approach.",
  rB: "Alchemist"
},

// Executor vs Curator
{
  sA: "When time is running out, I naturally focus on getting the essential version completed and usable.",
  rA: "Executor",
  sB: "When time is running out, I naturally focus on protecting the most important qualities so the final result still feels intentional.",
  rB: "Curator"
},

// Executor vs Advocate
{
  sA: "When teammates become overloaded, I naturally help by taking ownership of concrete work that needs to get done.",
  rA: "Executor",
  sB: "When teammates become overloaded, I naturally help by understanding people's capacity and helping the group adjust how the work is distributed.",
  rB: "Advocate"
},

// Alchemist vs Curator
{
  sA: "When a project starts feeling repetitive, I naturally introduce an unusual combination, experiment, or change that might transform it.",
  rA: "Alchemist",
  sB: "When a project starts feeling repetitive, I naturally examine what is still strong, what has become unnecessary, and what deserves refinement.",
  rB: "Curator"
},

// Alchemist vs Advocate
{
  sA: "When a group keeps avoiding an important issue, I naturally challenge the pattern and bring the underlying issue into the open.",
  rA: "Alchemist",
  sB: "When a group keeps avoiding an important issue, I naturally work to create enough trust for people to say what they have been holding back.",
  rB: "Advocate"
},

// Curator vs Advocate
{
  sA: "When people disagree about what the work should become, I naturally look at the project's purpose, references, and existing identity to guide the decision.",
  rA: "Curator",
  sB: "When people disagree about what the work should become, I naturally look at the needs, concerns, and values behind each person's position.",
  rB: "Advocate"
},
  
  // =====================================
// SECTION 3: SUSTAINABLE GROUP CONTRIBUTION
// What I can naturally keep contributing over time
// =====================================

// Ideator vs Analyst
{
  sA: "Over a long project, I naturally keep contributing by generating possibilities, making connections, and helping the group see additional directions.",
  rA: "Ideator",
  sB: "Over a long project, I naturally keep contributing by organizing complexity, identifying patterns, and helping the group understand how things fit together.",
  rB: "Analyst"
},

// Ideator vs Catalyst
{
  sA: "As a collaboration continues, I naturally keep bringing in fresh ideas, connections, and possibilities for the group to consider.",
  rA: "Ideator",
  sB: "As a collaboration continues, I naturally keep connecting people to priorities, opportunities, and the movement of the project.",
  rB: "Catalyst"
},

// Ideator vs Executor
{
  sA: "During a long collaboration, I naturally keep noticing additional directions, possibilities, or connections the group could explore.",
  rA: "Ideator",
  sB: "During a long collaboration, I naturally keep noticing concrete responsibilities I can take on to turn the group's plans into completed work.",
  rB: "Executor"
},

// Ideator vs Alchemist
{
  sA: "I can keep helping a group by expanding the range of ideas and possibilities available to us.",
  rA: "Ideator",
  sB: "I can keep helping a group by experimenting with existing ideas and finding ways to transform what we already have.",
  rB: "Alchemist"
},

// Ideator vs Curator
{
  sA: "As a project develops, I naturally keep looking for additional ideas, connections, and directions worth exploring.",
  rA: "Ideator",
  sB: "As a project develops, I naturally keep identifying which ideas, references, and choices are strongest and most fitting.",
  rB: "Curator"
},

// Ideator vs Advocate
{
  sA: "In an ongoing collaboration, I naturally keep contributing by bringing new possibilities and connections into the conversation.",
  rA: "Ideator",
  sB: "In an ongoing collaboration, I naturally keep contributing by noticing what would help people communicate, participate, and work well together.",
  rB: "Advocate"
},

// Analyst vs Catalyst
{
  sA: "I can consistently support a group by clarifying problems, organizing information, and making complicated situations easier to understand.",
  rA: "Analyst",
  sB: "I can consistently support a group by connecting people to priorities, coordinating movement, and helping maintain momentum.",
  rB: "Catalyst"
},

// Analyst vs Executor
{
  sA: "As a project continues, I naturally keep examining how the pieces work together, where problems may appear, and what could be improved.",
  rA: "Analyst",
  sB: "As a project continues, I naturally keep identifying what needs to be completed next and taking ownership of concrete work.",
  rB: "Executor"
},

// Analyst vs Alchemist
{
  sA: "I can stay engaged over time by understanding systems, identifying patterns, and improving how the existing pieces work together.",
  rA: "Analyst",
  sB: "I can stay engaged over time by questioning assumptions, experimenting with variations, and changing how the existing pieces are used.",
  rB: "Alchemist"
},

// Analyst vs Curator
{
  sA: "Throughout a project, I naturally keep checking whether the reasoning, structure, requirements, and processes still hold together.",
  rA: "Analyst",
  sB: "Throughout a project, I naturally keep checking whether the selections, references, presentation, and overall identity still hold together.",
  rB: "Curator"
},

// Analyst vs Advocate
{
  sA: "In a long-running group, I naturally keep helping clarify the issues, information, and relationships between different parts of the work.",
  rA: "Analyst",
  sB: "In a long-running group, I naturally keep helping clarify people's perspectives, needs, and relationships with one another.",
  rB: "Advocate"
},

// Catalyst vs Executor
{
  sA: "Over time, I naturally help a project keep moving by coordinating people around priorities, decisions, and next moves.",
  rA: "Catalyst",
  sB: "Over time, I naturally help a project keep moving by taking ownership of concrete responsibilities and steadily completing work.",
  rB: "Executor"
},

// Catalyst vs Alchemist
{
  sA: "I can keep contributing by helping people stay connected to a direction and maintaining movement around it.",
  rA: "Catalyst",
  sB: "I can keep contributing by challenging patterns that become limiting and introducing experiments that could change the direction.",
  rB: "Alchemist"
},

// Catalyst vs Curator
{
  sA: "As a project grows, I naturally keep thinking about how to communicate it, involve people, and build participation around it.",
  rA: "Catalyst",
  sB: "As a project grows, I naturally keep thinking about how to preserve its strongest qualities, identity, and coherence as more gets added.",
  rB: "Curator"
},

// Catalyst vs Advocate
{
  sA: "In an ongoing group, I naturally keep strengthening participation by connecting people to the goal, opportunities, and next moves.",
  rA: "Catalyst",
  sB: "In an ongoing group, I naturally keep strengthening participation by improving communication, trust, workload, and the conditions people need to contribute.",
  rB: "Advocate"
},

// Executor vs Alchemist
{
  sA: "I can keep contributing to a project by steadily turning decisions into finished, usable work.",
  rA: "Executor",
  sB: "I can keep contributing to a project by regularly testing variations, recombining ideas, and transforming how the work is being approached.",
  rB: "Alchemist"
},

// Executor vs Curator
{
  sA: "As a project continues, I naturally keep paying attention to what still needs to be completed so important pieces reach a usable state.",
  rA: "Executor",
  sB: "As a project continues, I naturally keep paying attention to what should be selected, removed, or refined so the work remains coherent.",
  rB: "Curator"
},

// Executor vs Advocate
{
  sA: "In a long collaboration, I naturally keep noticing concrete responsibilities that need an owner and taking responsibility for getting them done.",
  rA: "Executor",
  sB: "In a long collaboration, I naturally keep noticing adjustments in communication, workload, or expectations that could help people contribute better.",
  rB: "Advocate"
},

// Alchemist vs Curator
{
  sA: "As a project develops, I naturally keep looking for opportunities to recombine, challenge, or transform what we have already created.",
  rA: "Alchemist",
  sB: "As a project develops, I naturally keep looking for opportunities to select, refine, and strengthen what we have already created.",
  rB: "Curator"
},

// Alchemist vs Advocate
{
  sA: "Over time, I naturally notice patterns in the work or process that have become limiting and look for ways to change them.",
  rA: "Alchemist",
  sB: "Over time, I naturally notice patterns between people that have become limiting and look for ways to improve how the group works together.",
  rB: "Advocate"
},

// Curator vs Advocate
{
  sA: "In an ongoing collaboration, I naturally keep paying attention to whether the work remains coherent, intentional, and true to what the group is creating.",
  rA: "Curator",
  sB: "In an ongoing collaboration, I naturally keep paying attention to whether the people remain supported, understood, and able to contribute effectively.",
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
      The Heart & Emotional Anchor of the Project
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
      The Spark & Conceptual Visionary
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
      <b>Organizing Architect:</b>
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
      The Connector and Mobilizer
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
      The Implementer & Tangible Builder
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
      The Experimental Maverick
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
