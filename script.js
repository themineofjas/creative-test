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
  // What I naturally bring when collaboration gets difficult
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
    sA: "When everyone is confused about what to do next, I naturally organize what we know, what is uncertain, and how the pieces relate.",
    rA: "Analyst",
    sB: "When everyone is confused about what to do next, I naturally help the group choose an immediate direction and regain forward movement.",
    rB: "Catalyst"
  },

  // Analyst vs Executor
  {
    sA: "When something goes wrong near a deadline, I naturally want to identify the source of the problem and what needs to change.",
    rA: "Analyst",
    sB: "When something goes wrong near a deadline, I naturally want to identify the most useful action we can take immediately.",
    rB: "Executor"
  },

  // Analyst vs Alchemist
  {
    sA: "When an existing rule or limitation causes trouble, I naturally work out what the constraint actually is and how we can solve the problem around it.",
    rA: "Analyst",
    sB: "When an existing rule or limitation causes trouble, I naturally question the assumption behind it and explore whether we can approach the situation differently.",
    rB: "Alchemist"
  },

  // Analyst vs Curator
  {
    sA: "When the quality of the work starts slipping, I naturally check whether the structure, process, or requirements have stopped working as intended.",
    rA: "Analyst",
    sB: "When the quality of the work starts slipping, I naturally check whether our choices still fit together and represent what the project is supposed to be.",
    rB: "Curator"
  },

  // Analyst vs Advocate
  {
    sA: "When a team problem becomes complicated, I naturally separate the issues so we can understand the parts of the problem more clearly.",
    rA: "Analyst",
    sB: "When a team problem becomes complicated, I naturally separate the perspectives and concerns so we can understand what is happening between the people involved.",
    rB: "Advocate"
  },

  // Catalyst vs Executor
  {
    sA: "When a project stalls, I naturally start reconnecting people to priorities, decisions, and next moves so momentum can return.",
    rA: "Catalyst",
    sB: "When a project stalls, I naturally identify something concrete that can be completed and begin moving the work forward.",
    rB: "Executor"
  },

  // Catalyst vs Alchemist
  {
    sA: "When the group's current direction is no longer working, I naturally focus on finding a direction people can understand and move around together.",
    rA: "Catalyst",
    sB: "When the group's current direction is no longer working, I naturally focus on challenging the existing pattern and testing a different approach.",
    rB: "Alchemist"
  },

  // Catalyst vs Curator
  {
    sA: "When people outside the group stop responding to a project, I naturally rethink how we are communicating it and inviting people into it.",
    rA: "Catalyst",
    sB: "When people outside the group stop responding to a project, I naturally rethink whether what we are presenting clearly reflects its strongest qualities and identity.",
    rB: "Curator"
  },

  // Catalyst vs Advocate
  {
    sA: "When a group loses confidence, I naturally help reconnect people to what we can still accomplish and what we can do next.",
    rA: "Catalyst",
    sB: "When a group loses confidence, I naturally help identify what people need in order to feel able to participate and contribute again.",
    rB: "Advocate"
  },

  // Executor vs Alchemist
  {
    sA: "When the original plan becomes impossible, I naturally choose the strongest workable alternative and begin building from there.",
    rA: "Executor",
    sB: "When the original plan becomes impossible, I naturally use the disruption as an opportunity to test a substantially different approach.",
    rB: "Alchemist"
  },

  // Executor vs Curator
  {
    sA: "When time is running out, I naturally focus on making sure the essential pieces are completed and ready to use.",
    rA: "Executor",
    sB: "When time is running out, I naturally focus on making sure the most important choices still fit together and represent the project well.",
    rB: "Curator"
  },

  // Executor vs Advocate
  {
    sA: "When teammates become overloaded, I naturally help by taking ownership of concrete responsibilities that need to be handled.",
    rA: "Executor",
    sB: "When teammates become overloaded, I naturally help by noticing where workload, communication, or expectations need to be adjusted.",
    rB: "Advocate"
  },

  // Alchemist vs Curator
  {
    sA: "When a project starts feeling repetitive, I naturally look for an experiment, combination, or change that could transform what we are doing.",
    rA: "Alchemist",
    sB: "When a project starts feeling repetitive, I naturally look for what should be removed, strengthened, or refined so the work becomes more distinct again.",
    rB: "Curator"
  },

  // Alchemist vs Advocate
  {
    sA: "When a group keeps avoiding an important issue, I naturally notice the pattern that is keeping us stuck and challenge it directly.",
    rA: "Alchemist",
    sB: "When a group keeps avoiding an important issue, I naturally notice what may be preventing people from speaking openly and work on those conditions.",
    rB: "Advocate"
  },

  // Curator vs Advocate
  {
    sA: "When people disagree about what the work should become, I naturally look at the project's purpose, references, and strongest existing choices to guide the decision.",
    rA: "Curator",
    sB: "When people disagree about what the work should become, I naturally look at the needs, concerns, and priorities behind each person's position.",
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
    <h2 class="profile-title">The Advocate</h2>
    <div class="profile-sub">The Human Conditions Anchor</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally pay attention to the conditions that help people contribute well together.
      You notice communication, trust, workload, capacity, tension, and the needs that may be
      affecting participation. In a group, you are often drawn toward strengthening the human
      side of collaboration so people can do their best work.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Participation Support:</b>
      You notice what may be preventing people from contributing fully and help improve the
      conditions around them.

      <br><br>

      <b>Relational Awareness:</b>
      You recognize interpersonal patterns, unspoken concerns, and communication problems
      that can quietly affect the work.
    </p>
  `,


  Ideator: `
    <h2 class="profile-title">The Ideator</h2>
    <div class="profile-sub">The Possibility Generator</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally expand what a group can imagine. You notice possibilities, connections,
      questions, and directions that other people may not have considered yet. In a group,
      you are often drawn toward opening the field of options and giving the project more
      places it could go.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Possibility Expansion:</b>
      You help groups move beyond the first obvious answer by generating additional
      directions and connections.

      <br><br>

      <b>Concept Discovery:</b>
      You often spot promising ideas or relationships between ideas before they have
      been fully developed.
    </p>
  `,


  Analyst: `
    <h2 class="profile-title">The Analyst</h2>
    <div class="profile-sub">The Structure & Sense-Making Anchor</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally make complexity easier to understand. You notice structure,
      dependencies, constraints, evidence, patterns, and places where something may not
      fit together yet. In a group, you are often drawn toward clarifying how the work
      functions and helping people make better-informed decisions.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Structural Clarity:</b>
      You organize complicated information into frameworks that make the situation
      easier to understand.

      <br><br>

      <b>Problem Diagnosis:</b>
      You notice gaps, risks, dependencies, and breakdowns that the group may need
      to address.
    </p>
  `,


  Catalyst: `
    <h2 class="profile-title">The Catalyst</h2>
    <div class="profile-sub">The Movement & Mobilization Engine</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally help collective energy become movement. You notice where people need
      a clearer direction, stronger connection to the goal, better coordination, or a
      reason to engage. In a group, you are often drawn toward connecting people to
      opportunities, decisions, and next moves so the project gains traction.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Momentum Building:</b>
      You help groups move from discussion into coordinated forward motion.

      <br><br>

      <b>Connection to Action:</b>
      You help people understand where they fit, what matters now, and how they can
      participate in what comes next.
    </p>
  `,


  Executor: `
    <h2 class="profile-title">The Executor</h2>
    <div class="profile-sub">The Implementation & Completion Engine</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally turn shared intentions into tangible progress. You notice concrete
      responsibilities, unfinished pieces, and the next actions required to make something
      real. In a group, you are often drawn toward taking ownership of work and helping
      ideas reach a usable or completed state.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Implementation:</b>
      You translate decisions and plans into concrete work that people can see, use,
      test, or build on.

      <br><br>

      <b>Completion:</b>
      You keep track of what still needs an owner and help important pieces cross
      the finish line.
    </p>
  `,


  Alchemist: `
    <h2 class="profile-title">The Alchemist</h2>
    <div class="profile-sub">The Transformation & Experimentation Engine</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally look for ways to transform what already exists. You notice assumptions,
      patterns, combinations, and conventions that could be challenged, recombined, or
      tested differently. In a group, you are often drawn toward experimentation that
      changes how the project is understood or approached.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Pattern Disruption:</b>
      You notice when an established approach has become limiting and introduce
      alternatives that can shift the work.

      <br><br>

      <b>Creative Recombination:</b>
      You bring distant ideas, methods, or elements together in ways that can produce
      something genuinely different.
    </p>
  `,


  Curator: `
    <h2 class="profile-title">The Curator</h2>
    <div class="profile-sub">The Discernment & Coherence Anchor</div>

    <h3 class="section-title">Your Natural Group Contribution</h3>

    <p class="profile-text">
      You naturally notice what belongs, what is strongest, and what should be refined
      or removed. You pay attention to quality, context, references, consistency,
      presentation, and the identity of the work as a whole. In a group, you are often
      drawn toward helping the project become more coherent and intentional.
    </p>

    <h3 class="section-title">Your Group Superpowers</h3>

    <p class="profile-text">
      <b>Discernment:</b>
      You help groups distinguish between what is merely available and what is actually
      worth keeping or developing.

      <br><br>

      <b>Coherence:</b>
      You protect the relationship between individual choices and the larger identity,
      quality, or purpose of the project.
    </p>
  `

};

// =====================================
// ROLE DIRECTORY
// =====================================

const roleDetails = {

  Ideator: {
    fullName: "The Ideator — Possibility Generator",
    contribution:
      "Adds possibilities, connections, concepts, and new directions."
  },

  Analyst: {
    fullName: "The Analyst — Structure & Sense-Making Anchor",
    contribution:
      "Adds clarity, structure, analysis, and understanding of how the pieces fit together."
  },

  Catalyst: {
    fullName: "The Catalyst — Movement & Mobilization Engine",
    contribution:
      "Adds momentum, coordination, participation, and forward movement."
  },

  Executor: {
    fullName: "The Executor — Implementation & Completion Engine",
    contribution:
      "Adds concrete action, ownership, implementation, and completion."
  },

  Alchemist: {
    fullName: "The Alchemist — Transformation & Experimentation Engine",
    contribution:
      "Adds experimentation, reframing, recombination, and transformation."
  },

  Curator: {
    fullName: "The Curator — Discernment & Coherence Anchor",
    contribution:
      "Adds discernment, quality control, context, selection, and coherence."
  },

  Advocate: {
    fullName: "The Advocate — Human Conditions Anchor",
    contribution:
      "Adds attention to communication, trust, capacity, relationships, and healthy collaboration."
  }

};


// =====================================
// COMPLEMENTARY ROLE RECOMMENDATIONS
//
// These are provisional design recommendations.
// They are intended to broaden the contribution
// mix around a person's Primary + Secondary Roles.
// =====================================

const complementaryPairings = {

  "Ideator|Analyst":
    ["Catalyst", "Executor", "Advocate"],

  "Ideator|Catalyst":
    ["Analyst", "Executor", "Advocate"],

  "Ideator|Executor":
    ["Analyst", "Catalyst", "Advocate"],

  "Ideator|Alchemist":
    ["Analyst", "Executor", "Advocate"],

  "Ideator|Curator":
    ["Catalyst", "Executor", "Advocate"],

  "Ideator|Advocate":
    ["Analyst", "Catalyst", "Executor"],


  "Analyst|Catalyst":
    ["Ideator", "Executor", "Advocate"],

  "Analyst|Executor":
    ["Ideator", "Catalyst", "Advocate"],

  "Analyst|Alchemist":
    ["Catalyst", "Executor", "Advocate"],

  "Analyst|Curator":
    ["Ideator", "Executor", "Advocate"],

  "Analyst|Advocate":
    ["Ideator", "Catalyst", "Executor"],


  "Catalyst|Executor":
    ["Ideator", "Analyst", "Advocate"],

  "Catalyst|Alchemist":
    ["Analyst", "Executor", "Advocate"],

  "Catalyst|Curator":
    ["Ideator", "Executor", "Advocate"],

  "Catalyst|Advocate":
    ["Ideator", "Analyst", "Executor"],


  "Executor|Alchemist":
    ["Analyst", "Curator", "Advocate"],

  "Executor|Curator":
    ["Ideator", "Catalyst", "Advocate"],

  "Executor|Advocate":
    ["Ideator", "Analyst", "Catalyst"],


  "Alchemist|Curator":
    ["Analyst", "Executor", "Advocate"],

  "Alchemist|Advocate":
    ["Analyst", "Catalyst", "Executor"],


  "Curator|Advocate":
    ["Ideator", "Catalyst", "Executor"]

};

// =====================================
// APPLICATION STATE
// =====================================

const roleNames = [
  "Ideator",
  "Analyst",
  "Catalyst",
  "Executor",
  "Alchemist",
  "Curator",
  "Advocate"
];

// =====================================
// CREATE PRIMARY + SECONDARY PAIR KEY
// =====================================

function getPairKey(roleA, roleB) {

  const indexA =
    roleNames.indexOf(roleA);

  const indexB =
    roleNames.indexOf(roleB);


  if (indexA < indexB) {

    return `${roleA}|${roleB}`;
  }


  return `${roleB}|${roleA}`;
}


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


// Stores the complete response pattern
let responses = [];


let timerInterval;

let timeLeft = 45;

let questionStartedAt = null;

let answerLocked = false;


// =====================================
// IDENTIFY QUESTION SECTION
// =====================================

function getSectionName(questionIndex) {

  if (questionIndex < 21) {
    return "Foundational";
  }

  if (questionIndex < 42) {
    return "Friction";
  }

  return "Sustainable";
}


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


  answerLocked = false;


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


  questionStartedAt = Date.now();


  updateTimerDisplay();


  timerInterval = setInterval(() => {

    timeLeft--;


    if (timeLeft <= 0) {

      timeLeft = 0;

      clearInterval(timerInterval);
    }


    updateTimerDisplay();

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

  if (answerLocked) {
    return;
  }


  if (choice !== "A" && choice !== "B") {
    return;
  }


  answerLocked = true;


  clearInterval(timerInterval);


  const q = questions[currentQuestionIndex];


  const chosenRole =
    choice === "A"
      ? q.rA
      : q.rB;


  const rejectedRole =
    choice === "A"
      ? q.rB
      : q.rA;


  const elapsedSeconds =
    questionStartedAt
      ? Math.round(
          ((Date.now() - questionStartedAt) / 1000) * 10
        ) / 10
      : null;


  // Add one provisional point
  scores[chosenRole] += 1;


  // Preserve the complete answer
  responses.push({

    questionNumber:
      currentQuestionIndex + 1,

    section:
      getSectionName(currentQuestionIndex),

    choice:
      choice,

    chosenRole:
      chosenRole,

    rejectedRole:
      rejectedRole,

    elapsedSeconds:
      elapsedSeconds

  });


  currentQuestionIndex++;


  loadQuestion();
}


// =====================================
// SECTION SCORES
// Used only for tie resolution
// =====================================

function getSectionScores(role) {

  const sectionScores = {
    Foundational: 0,
    Friction: 0,
    Sustainable: 0
  };


  responses.forEach(response => {

    if (response.chosenRole === role) {

      sectionScores[response.section] += 1;
    }

  });


  return sectionScores;
}


// =====================================
// CONSISTENCY SCORE
// How strongly the Role appears across
// all three contexts
// =====================================

function getConsistencyScore(role) {

  const sectionScores =
    getSectionScores(role);


  return Math.min(
    sectionScores.Foundational,
    sectionScores.Friction,
    sectionScores.Sustainable
  );
}


// =====================================
// HEAD-TO-HEAD TIE SCORE
// Counts wins against other Roles that
// have the same overall score
// =====================================

function getHeadToHeadTieScore(
  role,
  tiedRoles
) {

  let tieScore = 0;


  responses.forEach(response => {

    if (
      response.chosenRole === role &&
      tiedRoles.includes(response.rejectedRole)
    ) {

      tieScore++;
    }

  });


  return tieScore;
}


// =====================================
// RANK ROLES
// =====================================

function rankRoles() {

  const groupedByScore = {};


  roleNames.forEach(role => {

    const score = scores[role];


    if (!groupedByScore[score]) {
      groupedByScore[score] = [];
    }


    groupedByScore[score].push(role);

  });


  const scoreLevels =
    Object.keys(groupedByScore)
      .map(Number)
      .sort((a, b) => b - a);


  const rankedRoles = [];


  scoreLevels.forEach(scoreLevel => {

    const tiedRoles =
      groupedByScore[scoreLevel];


    if (tiedRoles.length === 1) {

      rankedRoles.push(tiedRoles[0]);

      return;
    }


    tiedRoles.sort((roleA, roleB) => {

      // -----------------------------
      // Tie-breaker 1:
      // Direct comparisons among
      // Roles with the same score
      // -----------------------------

      const headToHeadA =
        getHeadToHeadTieScore(
          roleA,
          tiedRoles
        );


      const headToHeadB =
        getHeadToHeadTieScore(
          roleB,
          tiedRoles
        );


      if (headToHeadB !== headToHeadA) {

        return headToHeadB - headToHeadA;
      }


      // -----------------------------
      // Tie-breaker 2:
      // Which Role appeared more
      // consistently across all
      // three sections?
      // -----------------------------

      const consistencyA =
        getConsistencyScore(roleA);


      const consistencyB =
        getConsistencyScore(roleB);


      if (consistencyB !== consistencyA) {

        return consistencyB - consistencyA;
      }


      // -----------------------------
      // Final deterministic fallback.
      // This has no psychometric meaning
      // and should rarely be needed.
      // -----------------------------

      return (
        roleNames.indexOf(roleA) -
        roleNames.indexOf(roleB)
      );

    });


    rankedRoles.push(...tiedRoles);

  });


  return rankedRoles;
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


  const rankedRoles =
    rankRoles();


  const primaryRole =
    rankedRoles[0];


  const secondaryRole =
    rankedRoles[1];


  // =====================================
  // FIND COMPLEMENTARY ROLES
  // =====================================

  const pairKey =
    getPairKey(
      primaryRole,
      secondaryRole
    );


  const recommendedRoles =
    complementaryPairings[pairKey] || [];


  const recommendationsHTML =
    recommendedRoles
      .map(role => `

        <div class="recommended-role">

          <h3 class="section-title">
            ${roleDetails[role].fullName}
          </h3>

          <p class="profile-text">
            ${roleDetails[role].contribution}
          </p>

        </div>

      `)
      .join("");


  // =====================================
  // BUILD FULL ROLE DIRECTORY
  // =====================================

  const allRolesHTML =
    roleNames
      .map(role => `

        <li>
          <b>${roleDetails[role].fullName}</b>
        </li>

      `)
      .join("");


  // =====================================
  // DISPLAY RESULTS
  // =====================================

  document
    .getElementById("results-content")
    .innerHTML = `

      <p class="profile-text">
        Your results describe the kinds of contributions
        you appear most naturally drawn to make when
        working with other people.

        <b>They are not a limit on what you can do.</b>

        Screenshot and share your results with family
        or friends to compare perspectives and discuss
        how accurately they reflect you.
      </p>


      <h3 class="section-title">
        Your Primary Role
      </h3>

      ${profiles[primaryRole]}


      <h3 class="section-title">
        Your Secondary Role
      </h3>

      ${profiles[secondaryRole]}


      <h3 class="section-title">
        Your Combination
      </h3>

      <p class="profile-text">
        Your Primary Role represents the contribution
        pattern that emerged most strongly across your
        responses. Your Secondary Role represents another
        prominent contribution pattern.

        <br><br>

        Together, these two Roles offer a more useful
        picture of how you are naturally inclined to
        contribute in collaborative work than either
        Role alone.
      </p>


      <h2 class="profile-title">
        Three Complementary Roles to Look For
      </h2>

      <p class="profile-text">
        A productive creative group can benefit from
        people who contribute in different ways.
        Based on your Primary and Secondary Roles,
        these three Roles may bring contributions
        that are less represented in your own result.
      </p>


      ${recommendationsHTML}


      <p class="profile-text">
        These are not rules about who you should work with.
        Think of them as useful Roles to look for when
        building a group with a broader mix of strengths,
        perspectives, and ways of contributing.
      </p>


      <h2 class="profile-title">
        The Seven Creative Roles
      </h2>

      <p class="profile-text">
        Every Role represents a different contribution
        to collaborative creative work. A person can
        use all seven. Your results simply highlight
        the patterns that emerged most strongly for you.
      </p>


      <ul class="profile-text role-directory">
        ${allRolesHTML}
      </ul>

    `;
}
