// =====================================
// QUESTION BANK
//
// IMPORTANT:
// Question IDs are permanent.
// If questions are reordered later,
// keep each question's original ID.
// =====================================

const questions = [

  // =====================================
  // SECTION 1: FOUNDATIONAL ROLE PAIRS
  // Preferred contribution in a group
  // =====================================

  // Ideator vs Analyst
  {
    id: "F01",
    section: "Foundational",

    sA: "When a group is figuring out what to do, I naturally start expanding the possibilities and making connections between different ideas.",
    rA: "Ideator",

    sB: "When a group is figuring out what to do, I naturally start organizing the information and identifying the parts we need to understand.",
    rB: "Analyst"
  },


  // Catalyst vs Executor
  {
    id: "F02",
    section: "Foundational",

    sA: "Once a group has a direction, I naturally help create momentum by coordinating people around what we are trying to accomplish.",
    rA: "Catalyst",

    sB: "Once a group has a direction, I naturally help create momentum by turning what we decided into concrete work that can be completed.",
    rB: "Executor"
  },


  // Alchemist vs Curator
  {
    id: "F03",
    section: "Foundational",

    sA: "When a group already has something promising, I naturally look for unusual combinations or changes that could transform it into something new.",
    rA: "Alchemist",

    sB: "When a group already has something promising, I naturally look for what should be kept, removed, or refined so the whole thing feels stronger.",
    rB: "Curator"
  },


  // Advocate vs Ideator
  {
    id: "F04",
    section: "Foundational",

    sA: "Early in a collaboration, I naturally notice what would help the people involved communicate, participate, and work well together.",
    rA: "Advocate",

    sB: "Early in a collaboration, I naturally notice ideas, connections, and possible directions the group has not explored yet.",
    rB: "Ideator"
  },


  // Analyst vs Catalyst
  {
    id: "F05",
    section: "Foundational",

    sA: "At the beginning of a group project, I naturally help make the situation clearer by organizing what we know and how the pieces relate.",
    rA: "Analyst",

    sB: "At the beginning of a group project, I naturally help create movement by connecting people to a direction and getting participation started.",
    rB: "Catalyst"
  },


  // Executor vs Alchemist
  {
    id: "F06",
    section: "Foundational",

    sA: "When a group has a rough idea, I naturally want to start turning it into something concrete that we can use, test, or build on.",
    rA: "Executor",

    sB: "When a group has a rough idea, I naturally want to experiment with it, alter it, or combine it with something unexpected.",
    rB: "Alchemist"
  },


  // Curator vs Advocate
  {
    id: "F07",
    section: "Foundational",

    sA: "As a group develops something, I naturally notice whether the choices fit together and support a clear overall identity.",
    rA: "Curator",

    sB: "As a group develops something, I naturally notice whether people feel heard, supported, and able to contribute effectively.",
    rB: "Advocate"
  },


  // Ideator vs Catalyst
  {
    id: "F08",
    section: "Foundational",

    sA: "When a promising direction appears, I naturally want to keep exploring what else it could become or connect to.",
    rA: "Ideator",

    sB: "When a promising direction appears, I naturally want to help people understand it, get behind it, and move it forward.",
    rB: "Catalyst"
  },


  // Analyst vs Executor
  {
    id: "F09",
    section: "Foundational",

    sA: "After a group chooses a goal, I naturally want to map out what is required, what depends on what, and where problems might appear.",
    rA: "Analyst",

    sB: "After a group chooses a goal, I naturally want to take the next concrete step and begin turning the plan into something real.",
    rB: "Executor"
  },


  // Alchemist vs Advocate
  {
    id: "F10",
    section: "Foundational",

    sA: "In a collaborative group, I naturally notice assumptions or patterns that could be challenged to change the work.",
    rA: "Alchemist",

    sB: "In a collaborative group, I naturally notice interpersonal patterns that could be adjusted to help people work better together.",
    rB: "Advocate"
  },


  // Curator vs Ideator
  {
    id: "F11",
    section: "Foundational",

    sA: "When a group has many possible ideas, I naturally want to identify which ones are strongest, most fitting, or worth developing.",
    rA: "Curator",

    sB: "When a group has many possible ideas, I naturally want to make more connections and see what additional possibilities we can generate.",
    rB: "Ideator"
  },


  // Catalyst vs Advocate
  {
    id: "F12",
    section: "Foundational",

    sA: "When people come together around a shared project, I naturally help connect people to the goal, opportunities, and next moves.",
    rA: "Catalyst",

    sB: "When people come together around a shared project, I naturally help strengthen the trust, communication, and working relationships between them.",
    rB: "Advocate"
  },


  // Executor vs Curator
  {
    id: "F13",
    section: "Foundational",

    sA: "As a group approaches a finished result, I naturally focus on making sure the essential pieces are completed and ready to use.",
    rA: "Executor",

    sB: "As a group approaches a finished result, I naturally focus on making sure the final choices fit together and clearly represent what we intended.",
    rB: "Curator"
  },


  // Analyst vs Alchemist
  {
    id: "F14",
    section: "Foundational",

    sA: "When a group inherits an existing approach, I naturally want to understand how it works, where it breaks down, and what could be improved.",
    rA: "Analyst",

    sB: "When a group inherits an existing approach, I naturally want to question its assumptions and explore substantially different ways of doing it.",
    rB: "Alchemist"
  },


  // Ideator vs Executor
  {
    id: "F15",
    section: "Foundational",

    sA: "When a group starts with a blank page, I naturally want to help generate directions, concepts, and possibilities.",
    rA: "Ideator",

    sB: "When a group starts with a blank page, I naturally want to help create an early version we can actually see, use, or respond to.",
    rB: "Executor"
  },


  // Analyst vs Curator
  {
    id: "F16",
    section: "Foundational",

    sA: "When reviewing the group's work, I naturally notice whether the reasoning, structure, and practical requirements hold together.",
    rA: "Analyst",

    sB: "When reviewing the group's work, I naturally notice whether the selection, presentation, and overall identity hold together.",
    rB: "Curator"
  },


  // Catalyst vs Alchemist
  {
    id: "F17",
    section: "Foundational",

    sA: "When a group needs a new direction, I naturally focus on finding a direction people can understand, commit to, and move around.",
    rA: "Catalyst",

    sB: "When a group needs a new direction, I naturally focus on introducing an experiment or reframing that could change how we see the work.",
    rB: "Alchemist"
  },


  // Executor vs Advocate
  {
    id: "F18",
    section: "Foundational",

    sA: "When a group needs support moving forward, I naturally notice concrete responsibilities I can take ownership of.",
    rA: "Executor",

    sB: "When a group needs support moving forward, I naturally notice adjustments in communication, workload, or coordination that could help people contribute better.",
    rB: "Advocate"
  },


  // Analyst vs Advocate
  {
    id: "F19",
    section: "Foundational",

    sA: "When a group sees a situation differently, I naturally try to clarify the issues, evidence, and relationships between the parts of the problem.",
    rA: "Analyst",

    sB: "When a group sees a situation differently, I naturally try to clarify the perspectives, concerns, and relationships between the people involved.",
    rB: "Advocate"
  },


  // Catalyst vs Curator
  {
    id: "F20",
    section: "Foundational",

    sA: "When a group is ready to share its work with others, I naturally think about how to communicate it, attract interest, and build participation.",
    rA: "Catalyst",

    sB: "When a group is ready to share its work with others, I naturally think about whether the presentation accurately reflects its quality and identity.",
    rB: "Curator"
  },


  // Ideator vs Alchemist
  {
    id: "F21",
    section: "Foundational",

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
    id: "R01",
    section: "Friction",

    sA: "When a group gets stuck on a problem, I naturally start generating different ways we might approach it.",
    rA: "Ideator",

    sB: "When a group gets stuck on a problem, I naturally start breaking it apart to understand what is actually causing it.",
    rB: "Analyst"
  },


  // Ideator vs Catalyst
  {
    id: "R02",
    section: "Friction",

    sA: "When a group loses momentum, I naturally help by opening up fresh possibilities for what we could try next.",
    rA: "Ideator",

    sB: "When a group loses momentum, I naturally help by reconnecting people to a direction and getting movement started again.",
    rB: "Catalyst"
  },


  // Ideator vs Executor
  {
    id: "R03",
    section: "Friction",

    sA: "When a deadline suddenly changes the plan, I naturally look for alternative routes or possibilities we have not considered.",
    rA: "Ideator",

    sB: "When a deadline suddenly changes the plan, I naturally identify what still needs to be completed and start moving through it.",
    rB: "Executor"
  },


  // Ideator vs Alchemist
  {
    id: "R04",
    section: "Friction",

    sA: "When the group's first solution fails, I naturally generate several other possible solutions.",
    rA: "Ideator",

    sB: "When the group's first solution fails, I naturally question the original assumptions and try changing the approach itself.",
    rB: "Alchemist"
  },


  // Ideator vs Curator
  {
    id: "R05",
    section: "Friction",

    sA: "When a project loses direction, I naturally look for unexplored possibilities that might give us somewhere new to go.",
    rA: "Ideator",

    sB: "When a project loses direction, I naturally look back at its strongest ideas, references, and choices to recover what should guide us.",
    rB: "Curator"
  },


  // Ideator vs Advocate
  {
    id: "R06",
    section: "Friction",

    sA: "When disagreement starts blocking progress, I naturally introduce new possibilities that might help the group find another way forward.",
    rA: "Ideator",

    sB: "When disagreement starts blocking progress, I naturally try to understand what people are reacting to or needing before we decide how to move forward.",
    rB: "Advocate"
  },


  // Analyst vs Catalyst
  {
    id: "R07",
    section: "Friction",

    sA: "When everyone is confused about what to do next, I naturally organize what we know, what is uncertain, and how the pieces relate.",
    rA: "Analyst",

    sB: "When everyone is confused about what to do next, I naturally help the group choose an immediate direction and regain forward movement.",
    rB: "Catalyst"
  },


  // Analyst vs Executor
  {
    id: "R08",
    section: "Friction",

    sA: "When something goes wrong near a deadline, I naturally want to identify the source of the problem and what needs to change.",
    rA: "Analyst",

    sB: "When something goes wrong near a deadline, I naturally want to identify the most useful action we can take immediately.",
    rB: "Executor"
  },


  // Analyst vs Alchemist
  {
    id: "R09",
    section: "Friction",

    sA: "When an existing rule or limitation causes trouble, I naturally work out what the constraint actually is and how we can solve the problem around it.",
    rA: "Analyst",

    sB: "When an existing rule or limitation causes trouble, I naturally question the assumption behind it and explore whether we can approach the situation differently.",
    rB: "Alchemist"
  },


  // Analyst vs Curator
  {
    id: "R10",
    section: "Friction",

    sA: "When the quality of the work starts slipping, I naturally check whether the structure, process, or requirements have stopped working as intended.",
    rA: "Analyst",

    sB: "When the quality of the work starts slipping, I naturally check whether our choices still fit together and represent what the project is supposed to be.",
    rB: "Curator"
  },


  // Analyst vs Advocate
  {
    id: "R11",
    section: "Friction",

    sA: "When a team problem becomes complicated, I naturally separate the issues so we can understand the parts of the problem more clearly.",
    rA: "Analyst",

    sB: "When a team problem becomes complicated, I naturally separate the perspectives and concerns so we can understand what is happening between the people involved.",
    rB: "Advocate"
  },


  // Catalyst vs Executor
  {
    id: "R12",
    section: "Friction",

    sA: "When a project stalls, I naturally start reconnecting people to priorities, decisions, and next moves so momentum can return.",
    rA: "Catalyst",

    sB: "When a project stalls, I naturally identify something concrete that can be completed and begin moving the work forward.",
    rB: "Executor"
  },


  // Catalyst vs Alchemist
  {
    id: "R13",
    section: "Friction",

    sA: "When the group's current direction is no longer working, I naturally focus on finding a direction people can understand and move around together.",
    rA: "Catalyst",

    sB: "When the group's current direction is no longer working, I naturally focus on challenging the existing pattern and testing a different approach.",
    rB: "Alchemist"
  },


  // Catalyst vs Curator
  {
    id: "R14",
    section: "Friction",

    sA: "When people outside the group stop responding to a project, I naturally rethink how we are communicating it and inviting people into it.",
    rA: "Catalyst",

    sB: "When people outside the group stop responding to a project, I naturally rethink whether what we are presenting clearly reflects its strongest qualities and identity.",
    rB: "Curator"
  },


  // Catalyst vs Advocate
  {
    id: "R15",
    section: "Friction",

    sA: "When a group loses confidence, I naturally help reconnect people to what we can still accomplish and what we can do next.",
    rA: "Catalyst",

    sB: "When a group loses confidence, I naturally help identify what people need in order to feel able to participate and contribute again.",
    rB: "Advocate"
  },


  // Executor vs Alchemist
  {
    id: "R16",
    section: "Friction",

    sA: "When the original plan becomes impossible, I naturally choose the strongest workable alternative and begin building from there.",
    rA: "Executor",

    sB: "When the original plan becomes impossible, I naturally use the disruption as an opportunity to test a substantially different approach.",
    rB: "Alchemist"
  },


  // Executor vs Curator
  {
    id: "R17",
    section: "Friction",

    sA: "When time is running out, I naturally focus on making sure the essential pieces are completed and ready to use.",
    rA: "Executor",

    sB: "When time is running out, I naturally focus on making sure the most important choices still fit together and represent the project well.",
    rB: "Curator"
  },


  // Executor vs Advocate
  {
    id: "R18",
    section: "Friction",

    sA: "When teammates become overloaded, I naturally help by taking ownership of concrete responsibilities that need to be handled.",
    rA: "Executor",

    sB: "When teammates become overloaded, I naturally help by noticing where workload, communication, or expectations need to be adjusted.",
    rB: "Advocate"
  },


  // Alchemist vs Curator
  {
    id: "R19",
    section: "Friction",

    sA: "When a project starts feeling repetitive, I naturally look for an experiment, combination, or change that could transform what we are doing.",
    rA: "Alchemist",

    sB: "When a project starts feeling repetitive, I naturally look for what should be removed, strengthened, or refined so the work becomes more distinct again.",
    rB: "Curator"
  },


  // Alchemist vs Advocate
  {
    id: "R20",
    section: "Friction",

    sA: "When a group keeps avoiding an important issue, I naturally notice the pattern that is keeping us stuck and challenge it directly.",
    rA: "Alchemist",

    sB: "When a group keeps avoiding an important issue, I naturally notice what may be preventing people from speaking openly and work on those conditions.",
    rB: "Advocate"
  },


  // Curator vs Advocate
  {
    id: "R21",
    section: "Friction",

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
    id: "S01",
    section: "Sustainable",

    sA: "Over a long project, I naturally keep contributing by generating possibilities, making connections, and helping the group see additional directions.",
    rA: "Ideator",

    sB: "Over a long project, I naturally keep contributing by organizing complexity, identifying patterns, and helping the group understand how things fit together.",
    rB: "Analyst"
  },


  // Ideator vs Catalyst
  {
    id: "S02",
    section: "Sustainable",

    sA: "As a collaboration continues, I naturally keep bringing in fresh ideas, connections, and possibilities for the group to consider.",
    rA: "Ideator",

    sB: "As a collaboration continues, I naturally keep connecting people to priorities, opportunities, and the movement of the project.",
    rB: "Catalyst"
  },


  // Ideator vs Executor
  {
    id: "S03",
    section: "Sustainable",

    sA: "During a long collaboration, I naturally keep noticing additional directions, possibilities, or connections the group could explore.",
    rA: "Ideator",

    sB: "During a long collaboration, I naturally keep noticing concrete responsibilities I can take on to turn the group's plans into completed work.",
    rB: "Executor"
  },


  // Ideator vs Alchemist
  {
    id: "S04",
    section: "Sustainable",

    sA: "I can keep helping a group by expanding the range of ideas and possibilities available to us.",
    rA: "Ideator",

    sB: "I can keep helping a group by experimenting with existing ideas and finding ways to transform what we already have.",
    rB: "Alchemist"
  },


  // Ideator vs Curator
  {
    id: "S05",
    section: "Sustainable",

    sA: "As a project develops, I naturally keep looking for additional ideas, connections, and directions worth exploring.",
    rA: "Ideator",

    sB: "As a project develops, I naturally keep identifying which ideas, references, and choices are strongest and most fitting.",
    rB: "Curator"
  },


  // Ideator vs Advocate
  {
    id: "S06",
    section: "Sustainable",

    sA: "In an ongoing collaboration, I naturally keep contributing by bringing new possibilities and connections into the conversation.",
    rA: "Ideator",

    sB: "In an ongoing collaboration, I naturally keep contributing by noticing what would help people communicate, participate, and work well together.",
    rB: "Advocate"
  },


  // Analyst vs Catalyst
  {
    id: "S07",
    section: "Sustainable",

    sA: "I can consistently support a group by clarifying problems, organizing information, and making complicated situations easier to understand.",
    rA: "Analyst",

    sB: "I can consistently support a group by connecting people to priorities, coordinating movement, and helping maintain momentum.",
    rB: "Catalyst"
  },


  // Analyst vs Executor
  {
    id: "S08",
    section: "Sustainable",

    sA: "As a project continues, I naturally keep examining how the pieces work together, where problems may appear, and what could be improved.",
    rA: "Analyst",

    sB: "As a project continues, I naturally keep identifying what needs to be completed next and taking ownership of concrete work.",
    rB: "Executor"
  },


  // Analyst vs Alchemist
  {
    id: "S09",
    section: "Sustainable",

    sA: "I can stay engaged over time by understanding systems, identifying patterns, and improving how the existing pieces work together.",
    rA: "Analyst",

    sB: "I can stay engaged over time by questioning assumptions, experimenting with variations, and changing how the existing pieces are used.",
    rB: "Alchemist"
  },


  // Analyst vs Curator
  {
    id: "S10",
    section: "Sustainable",

    sA: "Throughout a project, I naturally keep checking whether the reasoning, structure, requirements, and processes still hold together.",
    rA: "Analyst",

    sB: "Throughout a project, I naturally keep checking whether the selections, references, presentation, and overall identity still hold together.",
    rB: "Curator"
  },


  // Analyst vs Advocate
  {
    id: "S11",
    section: "Sustainable",

    sA: "In a long-running group, I naturally keep helping clarify the issues, information, and relationships between different parts of the work.",
    rA: "Analyst",

    sB: "In a long-running group, I naturally keep helping clarify people's perspectives, needs, and relationships with one another.",
    rB: "Advocate"
  },


  // Catalyst vs Executor
  {
    id: "S12",
    section: "Sustainable",

    sA: "Over time, I naturally help a project keep moving by coordinating people around priorities, decisions, and next moves.",
    rA: "Catalyst",

    sB: "Over time, I naturally help a project keep moving by taking ownership of concrete responsibilities and steadily completing work.",
    rB: "Executor"
  },


  // Catalyst vs Alchemist
  {
    id: "S13",
    section: "Sustainable",

    sA: "I can keep contributing by helping people stay connected to a direction and maintaining movement around it.",
    rA: "Catalyst",

    sB: "I can keep contributing by challenging patterns that become limiting and introducing experiments that could change the direction.",
    rB: "Alchemist"
  },


  // Catalyst vs Curator
  {
    id: "S14",
    section: "Sustainable",

    sA: "As a project grows, I naturally keep thinking about how to communicate it, involve people, and build participation around it.",
    rA: "Catalyst",

    sB: "As a project grows, I naturally keep thinking about how to preserve its strongest qualities, identity, and coherence as more gets added.",
    rB: "Curator"
  },


  // Catalyst vs Advocate
  {
    id: "S15",
    section: "Sustainable",

    sA: "In an ongoing group, I naturally keep strengthening participation by connecting people to the goal, opportunities, and next moves.",
    rA: "Catalyst",

    sB: "In an ongoing group, I naturally keep strengthening participation by improving communication, trust, workload, and the conditions people need to contribute.",
    rB: "Advocate"
  },


  // Executor vs Alchemist
  {
    id: "S16",
    section: "Sustainable",

    sA: "I can keep contributing to a project by steadily turning decisions into finished, usable work.",
    rA: "Executor",

    sB: "I can keep contributing to a project by regularly testing variations, recombining ideas, and transforming how the work is being approached.",
    rB: "Alchemist"
  },


  // Executor vs Curator
  {
    id: "S17",
    section: "Sustainable",

    sA: "As a project continues, I naturally keep paying attention to what still needs to be completed so important pieces reach a usable state.",
    rA: "Executor",

    sB: "As a project continues, I naturally keep paying attention to what should be selected, removed, or refined so the work remains coherent.",
    rB: "Curator"
  },


  // Executor vs Advocate
  {
    id: "S18",
    section: "Sustainable",

    sA: "In a long collaboration, I naturally keep noticing concrete responsibilities that need an owner and taking responsibility for getting them done.",
    rA: "Executor",

    sB: "In a long collaboration, I naturally keep noticing adjustments in communication, workload, or expectations that could help people contribute better.",
    rB: "Advocate"
  },


  // Alchemist vs Curator
  {
    id: "S19",
    section: "Sustainable",

    sA: "As a project develops, I naturally keep looking for opportunities to recombine, challenge, or transform what we have already created.",
    rA: "Alchemist",

    sB: "As a project develops, I naturally keep looking for opportunities to select, refine, and strengthen what we have already created.",
    rB: "Curator"
  },


  // Alchemist vs Advocate
  {
    id: "S20",
    section: "Sustainable",

    sA: "Over time, I naturally notice patterns in the work or process that have become limiting and look for ways to change them.",
    rA: "Alchemist",

    sB: "Over time, I naturally notice patterns between people that have become limiting and look for ways to improve how the group works together.",
    rB: "Advocate"
  },


  // Curator vs Advocate
  {
    id: "S21",
    section: "Sustainable",

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
    <section class="role-profile">

      <h2 class="profile-title">
        The Advocate
      </h2>

      <div class="profile-sub">
        The Human Conditions Anchor
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally pay attention to the conditions
        that help people contribute well together.
        You notice communication, trust, workload,
        capacity, tension, and the needs that may be
        affecting participation. In a group, you are
        often drawn toward strengthening the human
        side of collaboration so people can do their
        best work.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Participation Support:</b>
        You notice what may be preventing people from
        contributing fully and help improve the
        conditions around them.

        <br><br>

        <b>Relational Awareness:</b>
        You recognize interpersonal patterns,
        unspoken concerns, and communication problems
        that can quietly affect the work.

      </p>

    </section>
  `,


  Ideator: `
    <section class="role-profile">

      <h2 class="profile-title">
        The Ideator
      </h2>

      <div class="profile-sub">
        The Possibility Generator
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally expand what a group can imagine.
        You notice possibilities, connections,
        questions, and directions that other people
        may not have considered yet. In a group, you
        are often drawn toward opening the field of
        options and giving the project more places
        it could go.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Possibility Expansion:</b>
        You help groups move beyond the first obvious
        answer by generating additional directions
        and connections.

        <br><br>

        <b>Concept Discovery:</b>
        You often spot promising ideas or
        relationships between ideas before they
        have been fully developed.

      </p>

    </section>
  `,


  Analyst: `
    <section class="role-profile">

      <h2 class="profile-title">
        The Analyst
      </h2>

      <div class="profile-sub">
        The Structure & Sense-Making Anchor
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally make complexity easier to
        understand. You notice structure,
        dependencies, constraints, evidence,
        patterns, and places where something may
        not fit together yet. In a group, you are
        often drawn toward clarifying how the work
        functions and helping people make
        better-informed decisions.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Structural Clarity:</b>
        You organize complicated information into
        frameworks that make the situation easier
        to understand.

        <br><br>

        <b>Problem Diagnosis:</b>
        You notice gaps, risks, dependencies, and
        breakdowns that the group may need to address.

      </p>

    </section>
  `,


  Catalyst: `
    <section class="role-profile">

      <h2 class="profile-title">
        The Catalyst
      </h2>

      <div class="profile-sub">
        The Movement & Mobilization Engine
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally help collective energy become
        movement. You notice where people need a
        clearer direction, stronger connection to
        the goal, better coordination, or a reason
        to engage. In a group, you are often drawn
        toward connecting people to opportunities,
        decisions, and next moves so the project
        gains traction.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Momentum Building:</b>
        You help groups move from discussion into
        coordinated forward motion.

        <br><br>

        <b>Connection to Action:</b>
        You help people understand where they fit,
        what matters now, and how they can participate
        in what comes next.

      </p>

    </section>
  `,


  Executor: `
    <section class="role-profile">

      <h2 class="profile-title">
        The Executor
      </h2>

      <div class="profile-sub">
        The Implementation & Completion Engine
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally turn shared intentions into
        tangible progress. You notice concrete
        responsibilities, unfinished pieces, and
        the next actions required to make something
        real. In a group, you are often drawn toward
        taking ownership of work and helping ideas
        reach a usable or completed state.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Implementation:</b>
        You translate decisions and plans into
        concrete work that people can see, use,
        test, or build on.

        <br><br>

        <b>Completion:</b>
        You keep track of what still needs an owner
        and help important pieces cross the finish line.

      </p>

    </section>
  `,


  Alchemist: `
    <section class="role-profile">

      <h2 class="profile-title">
        The Alchemist
      </h2>

      <div class="profile-sub">
        The Transformation & Experimentation Engine
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally look for ways to transform what
        already exists. You notice assumptions,
        patterns, combinations, and conventions that
        could be challenged, recombined, or tested
        differently. In a group, you are often drawn
        toward experimentation that changes how the
        project is understood or approached.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Pattern Disruption:</b>
        You notice when an established approach has
        become limiting and introduce alternatives
        that can shift the work.

        <br><br>

        <b>Creative Recombination:</b>
        You bring distant ideas, methods, or elements
        together in ways that can produce something
        genuinely different.

      </p>

    </section>
  `,


  Curator: `
    <section class="role-profile">

      <h2 class="profile-title">
        The Curator
      </h2>

      <div class="profile-sub">
        The Discernment & Coherence Anchor
      </div>

      <h3 class="section-title">
        Your Natural Group Contribution
      </h3>

      <p class="profile-text">
        You naturally notice what belongs, what is
        strongest, and what should be refined or
        removed. You pay attention to quality,
        context, references, consistency,
        presentation, and the identity of the work
        as a whole. In a group, you are often drawn
        toward helping the project become more
        coherent and intentional.
      </p>

      <h3 class="section-title">
        Your Group Superpowers
      </h3>

      <p class="profile-text">

        <b>Discernment:</b>
        You help groups distinguish between what is
        merely available and what is actually worth
        keeping or developing.

        <br><br>

        <b>Coherence:</b>
        You protect the relationship between individual
        choices and the larger identity, quality, or
        purpose of the project.

      </p>

    </section>
  `

};



// =====================================
// ROLE DIRECTORY
// =====================================

const roleDetails = {

  Ideator: {
    fullName:
      "The Ideator — Possibility Generator",

    contribution:
      "Adds possibilities, connections, concepts, and new directions."
  },


  Analyst: {
    fullName:
      "The Analyst — Structure & Sense-Making Anchor",

    contribution:
      "Adds clarity, structure, analysis, and understanding of how the pieces fit together."
  },


  Catalyst: {
    fullName:
      "The Catalyst — Movement & Mobilization Engine",

    contribution:
      "Adds momentum, coordination, participation, and forward movement."
  },


  Executor: {
    fullName:
      "The Executor — Implementation & Completion Engine",

    contribution:
      "Adds concrete action, ownership, implementation, and completion."
  },


  Alchemist: {
    fullName:
      "The Alchemist — Transformation & Experimentation Engine",

    contribution:
      "Adds experimentation, reframing, recombination, and transformation."
  },


  Curator: {
    fullName:
      "The Curator — Discernment & Coherence Anchor",

    contribution:
      "Adds discernment, quality control, context, selection, and coherence."
  },


  Advocate: {
    fullName:
      "The Advocate — Human Conditions Anchor",

    contribution:
      "Adds attention to communication, trust, capacity, relationships, and healthy collaboration."
  }

};



// =====================================
// COMPLEMENTARY ROLE RECOMMENDATIONS
//
// These are provisional group-building
// recommendations rather than validated
// compatibility scores.
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
// PRIMARY + SECONDARY ROLE COMBINATIONS
//
// One shared profile for each of the
// 21 possible unordered Role pairs.
// =====================================

const combinationProfiles = {

  "Ideator|Analyst": {

    together:
      "This combination brings possibility generation and sense-making together. You may naturally open up new directions while also wanting to understand how the ideas connect, what they require, and which patterns are worth paying attention to.",

    groupValue:
      "You may be especially useful when a group needs both imagination and clarity. You can help generate options without leaving them completely unstructured, giving the group more possibilities while also helping those possibilities become understandable.",

    tension:
      "The pull to keep expanding possibilities can sometimes compete with the pull to analyze and organize them. It may help to notice when the group needs more exploration and when it is time to make sense of what is already on the table."
  },


  "Ideator|Catalyst": {

    together:
      "This combination connects new possibilities with collective movement. You may naturally notice promising directions and then become interested in helping people engage with them, understand them, or move around them.",

    groupValue:
      "You may help a group move from possibility into enthusiasm and participation. Rather than only introducing ideas, you can also help those ideas gain attention, momentum, and involvement from other people.",

    tension:
      "Generating new possibilities and building momentum do not always happen at the same pace. You may need to notice when a fresh idea deserves exploration and when the group would benefit more from committing to a direction already in motion."
  },


  "Ideator|Executor": {

    together:
      "This combination connects possibility generation with concrete implementation. You may naturally imagine what could exist while also being drawn toward making at least some of those possibilities tangible.",

    groupValue:
      "You may be especially useful when a group needs ideas that can become prototypes, drafts, experiments, or finished work. You can help shorten the distance between imagining something and having something real to respond to.",

    tension:
      "The desire to explore another possibility can compete with the need to finish what has already been started. It may help to distinguish between moments that call for another idea and moments that call for completing the current one."
  },


  "Ideator|Alchemist": {

    together:
      "This combination strongly favors possibility, experimentation, and change. You may naturally generate new directions while also seeing ways to transform, recombine, or challenge what already exists.",

    groupValue:
      "You may help a group escape obvious solutions and discover approaches it would not have reached through incremental thinking alone. This combination can be particularly useful when genuinely new possibilities are needed.",

    tension:
      "Because both Roles can keep opening new territory, the group may eventually need help deciding what should become stable enough to develop. It can be useful to notice when continued novelty is expanding the work and when it is preventing commitment."
  },


  "Ideator|Curator": {

    together:
      "This combination brings expansion and discernment together. You may naturally generate possibilities while also developing a sense of which ideas, references, or directions have the strongest fit.",

    groupValue:
      "You may help groups avoid choosing between creativity and selectivity. You can widen the field of possibilities and then help recognize which possibilities deserve further attention.",

    tension:
      "The Ideator contribution wants to keep options open, while the Curator contribution eventually wants to distinguish what belongs from what does not. The useful question may be whether the group is currently in an expanding phase or a selecting phase."
  },


  "Ideator|Advocate": {

    together:
      "This combination connects possibility generation with attention to the people involved. You may naturally imagine new directions while also noticing how those directions could affect participation, communication, capacity, or collaboration.",

    groupValue:
      "You may help groups generate possibilities that remain connected to the realities of the people who would actually carry them out. You can bring imagination into the room without completely losing sight of human conditions.",

    tension:
      "An exciting possibility may not always match the group's current capacity or working conditions. At other times, concern about those conditions could make a promising idea feel harder to pursue. Both pieces of information can be useful."
  },


  "Analyst|Catalyst": {

    together:
      "This combination connects understanding with movement. You may naturally clarify what is happening, identify the important parts, and then become interested in helping the group organize around a direction.",

    groupValue:
      "You may be useful when a group needs movement that is grounded in a clearer understanding of the situation. You can help turn complexity into priorities that people can actually act around.",

    tension:
      "The desire to understand the situation thoroughly can sometimes slow movement, while the desire to regain momentum can sometimes push the group forward before everything is clear. The challenge is finding the amount of clarity the situation actually requires."
  },


  "Analyst|Executor": {

    together:
      "This combination connects structural understanding with implementation. You may naturally examine what needs to happen, how the pieces depend on one another, and then move toward concrete execution.",

    groupValue:
      "You may help a group build plans that are both understandable and workable. This combination can be particularly useful for translating complicated intentions into organized action.",

    tension:
      "Analysis can continue producing useful information long after action could begin. At the same time, moving too quickly can create avoidable problems. It may help to distinguish between information that is necessary for action and information that would simply be nice to know."
  },


  "Analyst|Alchemist": {

    together:
      "This combination connects deep understanding with transformation. You may naturally examine how something works and then notice assumptions, structures, or patterns that could be changed rather than merely repaired.",

    groupValue:
      "You may be particularly useful when a group needs to understand an existing system before redesigning it. You can bring both diagnosis and experimentation to difficult problems.",

    tension:
      "One part of you may want to improve the logic of the existing system while another wants to question whether the system itself should remain intact. It can help to distinguish between a problem inside the current approach and a problem with the approach itself."
  },


  "Analyst|Curator": {

    together:
      "This combination brings structural clarity and discernment together. You may naturally examine whether something works while also noticing whether its choices, context, quality, and overall identity belong together.",

    groupValue:
      "You may give a group a particularly strong review function. You can help distinguish between something that is technically workable and something that is also coherent, intentional, and worth presenting.",

    tension:
      "Functional logic and qualitative fit do not always point toward the same decision. Something can work without feeling right for the project, or fit the project while creating practical complications. Both forms of judgment deserve attention."
  },


  "Analyst|Advocate": {

    together:
      "This combination brings systems awareness and relational awareness together. You may naturally examine both what is happening in the work and what is happening among the people doing it.",

    groupValue:
      "You may help groups avoid treating every difficulty as either purely technical or purely interpersonal. You can notice how structures, expectations, information, communication, and relationships may be interacting.",

    tension:
      "A structural explanation can sometimes overlook people's lived experience, while focusing only on interpersonal experience can obscure a structural cause. This combination works best when neither side is automatically treated as the whole explanation."
  },


  "Catalyst|Executor": {

    together:
      "This combination connects collective movement with concrete delivery. You may naturally help people orient around what needs to happen and then become interested in making sure real work actually moves forward.",

    groupValue:
      "You may be especially useful when a group needs to convert energy into progress. You can help create momentum while also giving that momentum somewhere concrete to go.",

    tension:
      "Coordinating movement and personally carrying out work can compete for the same attention. You may sometimes need to decide whether your greatest contribution is helping everyone move or taking ownership of a specific piece yourself."
  },


  "Catalyst|Alchemist": {

    together:
      "This combination connects transformation with mobilization. You may naturally recognize when a different approach is needed and then become interested in helping people move around that change.",

    groupValue:
      "You may help groups do more than invent change privately. You can contribute to making a new direction understandable, actionable, and capable of gaining participation.",

    tension:
      "Transformation requires experimentation, while mobilization usually benefits from a direction people can recognize. Changing the approach too frequently can make coordinated movement difficult, while committing too early can limit experimentation."
  },


  "Catalyst|Curator": {

    together:
      "This combination connects movement with coherence. You may naturally think about how a project can reach people and gain participation while also noticing how it should be presented, framed, and protected as it grows.",

    groupValue:
      "You may help a group expand without completely losing the identity or quality of what it is expanding. This can be particularly valuable when work is moving from an internal project toward a larger audience or community.",

    tension:
      "Growth and participation can reward accessibility and speed, while discernment sometimes requires selectivity and restraint. It can help to ask what should become more open and what should remain carefully protected."
  },


  "Catalyst|Advocate": {

    together:
      "This combination connects participation with the conditions that make participation sustainable. You may naturally help people move toward a shared direction while also noticing what affects their ability to stay engaged.",

    groupValue:
      "You may help groups build momentum that is not based only on pressure or enthusiasm. You can connect people to action while remaining attentive to communication, trust, workload, and capacity.",

    tension:
      "The desire to keep things moving can sometimes conflict with signals that people need more clarity, support, or space. At other times, waiting for ideal conditions can stall useful movement. The task is not choosing one permanently, but reading what the group needs."
  },


  "Executor|Alchemist": {

    together:
      "This combination connects making with transforming. You may naturally build something concrete and then notice how it could be altered, tested, recombined, or improved through experimentation.",

    groupValue:
      "You may be particularly effective in iterative work where ideas need to become real before the group can learn from them. You can contribute both tangible output and meaningful revision.",

    tension:
      "The Executor contribution wants work to reach completion, while the Alchemist contribution can continue seeing reasons to change it. It may help to define when something is a prototype that should keep evolving and when it is a deliverable that needs to be finished."
  },


  "Executor|Curator": {

    together:
      "This combination connects completion with discernment. You may naturally want important work to get finished while also paying attention to whether the final choices are coherent, intentional, and strong enough to represent the project.",

    groupValue:
      "You may help groups produce work that is not only completed but considered. You can bring attention to both the finish line and the quality of what crosses it.",

    tension:
      "There will often be a point where further refinement improves the work only slightly while delaying completion significantly. Knowing what is good enough to release and what genuinely needs another pass can become an important judgment."
  },


  "Executor|Advocate": {

    together:
      "This combination connects practical responsibility with attention to human capacity. You may naturally notice what needs to be handled while also noticing how workload, expectations, and communication affect the people doing the work.",

    groupValue:
      "You may help groups create dependable progress without treating people as interchangeable resources. You can contribute practical support while remaining aware of the conditions under which that work is being done.",

    tension:
      "Because you can see both unfinished responsibilities and other people's needs, you may be tempted to absorb too much yourself. Sometimes the healthier contribution is completing the task; other times it is helping the group redistribute or rethink the task."
  },


  "Alchemist|Curator": {

    together:
      "This combination brings transformation and discernment together. You may naturally challenge what already exists while also developing a strong sense of which changes genuinely strengthen the work.",

    groupValue:
      "You may help a group innovate without treating change itself as the goal. You can introduce experimentation while still asking whether the result is more coherent, meaningful, or distinctive than what came before.",

    tension:
      "The Alchemist contribution is willing to disrupt familiar patterns, while the Curator contribution recognizes what may be worth preserving. Productive tension between those instincts can help distinguish meaningful transformation from change for its own sake."
  },


  "Alchemist|Advocate": {

    together:
      "This combination connects transformation with awareness of human dynamics. You may naturally notice limiting patterns and become interested in changing both how the work happens and the conditions surrounding the people involved.",

    groupValue:
      "You may be useful when a group needs to rethink habits, norms, assumptions, or ways of working that have become unhelpful. You can bring change into areas that other people may accept simply because they are familiar.",

    tension:
      "Challenging an entrenched pattern can be necessary, but people may not all be equally ready for that challenge. The useful question is often how to create meaningful change without ignoring the human conditions required for people to engage with it."
  },


  "Curator|Advocate": {

    together:
      "This combination connects discernment about the work with attentiveness to the people creating it. You may naturally notice whether a project remains coherent and intentional while also noticing whether the collaboration supporting it remains workable.",

    groupValue:
      "You may help groups protect both the integrity of the work and the conditions that allow people to contribute to it. This can make you particularly attentive to whether quality, expectations, context, and collaboration still fit together.",

    tension:
      "Maintaining a strong standard can sometimes conflict with people's current capacity or preferences. At the same time, accommodating every preference can weaken the identity of the work. The challenge is distinguishing what genuinely needs protection from what can be adapted."
  }

};



// =====================================
// PRIMARY ROLE LEAD LANGUAGE
// =====================================

const primaryLeadDescriptions = {

  Ideator:
    "expanding possibilities and making connections",

  Analyst:
    "making complexity understandable and clarifying structure",

  Catalyst:
    "creating movement and connecting people to action",

  Executor:
    "turning intentions into concrete progress",

  Alchemist:
    "challenging patterns and transforming what already exists",

  Curator:
    "using discernment to strengthen quality and coherence",

  Advocate:
    "strengthening the human conditions that help people contribute well"

};



// =====================================
// SECONDARY ROLE SUPPORT LANGUAGE
// =====================================

const secondarySupportDescriptions = {

  Ideator:
    "open additional possibilities and connections",

  Analyst:
    "add structure, clarity, and sense-making",

  Catalyst:
    "turn direction into coordinated movement",

  Executor:
    "turn ideas and decisions into concrete work",

  Alchemist:
    "introduce experimentation, reframing, and transformation",

  Curator:
    "refine choices and protect coherence",

  Advocate:
    "keep communication, capacity, and collaborative conditions in view"

};



// =====================================
// ROLE ORDER
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

function getPairKey(
  roleA,
  roleB
) {

  const indexA =
    roleNames.indexOf(roleA);

  const indexB =
    roleNames.indexOf(roleB);


  if (indexA < indexB) {

    return `${roleA}|${roleB}`;
  }


  return `${roleB}|${roleA}`;
}



// =====================================
// BUILD PRIMARY + SECONDARY
// COMBINATION INTERPRETATION
// =====================================

function buildCombinationHTML(
  primaryRole,
  secondaryRole
) {

  const pairKey =
    getPairKey(
      primaryRole,
      secondaryRole
    );


  const combination =
    combinationProfiles[
      pairKey
    ];


  if (!combination) {

    return "";
  }


  return `

    <h3 class="section-title">
      Your Combination
    </h3>


    <p class="profile-text">
      Your ${primaryRole} result suggests that you may
      lead by ${primaryLeadDescriptions[primaryRole]}.
      Your ${secondaryRole} contribution may then help
      you ${secondarySupportDescriptions[secondaryRole]}.
    </p>


    <h3 class="section-title">
      How These Roles Work Together
    </h3>

    <p class="profile-text">
      ${combination.together}
    </p>


    <h3 class="section-title">
      What You May Add to a Group
    </h3>

    <p class="profile-text">
      ${combination.groupValue}
    </p>


    <h3 class="section-title">
      Potential Tension to Watch
    </h3>

    <p class="profile-text">
      ${combination.tension}
    </p>

  `;
}



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


let responses = [];


let timerInterval;


let timeLeft = 45;


let questionStartedAt = null;


let answerLocked = false;



// =====================================
// START ASSESSMENT
// =====================================

function startTest() {

  document
    .documentElement
    .classList
    .add("quiz-active");


  document
    .body
    .classList
    .add("quiz-active");


  document
    .getElementById(
      "welcome-screen"
    )
    .classList
    .add("hide");


  document
    .getElementById(
      "quiz-screen"
    )
    .classList
    .remove("hide");


  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });


  loadQuestion();
}



// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {

  if (
    currentQuestionIndex >=
    questions.length
  ) {

    showResults();

    return;
  }


  answerLocked = false;


  /*
     +1 makes progress visible
     starting on Question 1.
  */

  const percent =
    (
      (
        currentQuestionIndex + 1
      ) /
      questions.length
    ) *
    100;


  document
    .getElementById(
      "progress"
    )
    .style
    .width =
    `${percent}%`;


  const q =
    questions[
      currentQuestionIndex
    ];


  document
    .getElementById(
      "btn-sideA"
    )
    .textContent =
    q.sA;


  document
    .getElementById(
      "btn-sideB"
    )
    .textContent =
    q.sB;


  clearInterval(
    timerInterval
  );


  timeLeft = 45;


  questionStartedAt =
    Date.now();


  updateTimerDisplay();


  timerInterval =
    setInterval(
      () => {

        timeLeft--;


        if (
          timeLeft <= 0
        ) {

          timeLeft = 0;


          clearInterval(
            timerInterval
          );

        }


        updateTimerDisplay();

      },
      1000
    );
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
    .getElementById(
      "timer"
    )
    .textContent =
    `00:${formattedTime}`;
}



// =====================================
// RECORD ANSWER
// =====================================

function handleAnswer(choice) {

  if (answerLocked) {

    return;
  }


  if (
    choice !== "A" &&
    choice !== "B"
  ) {

    return;
  }


  answerLocked = true;


  clearInterval(
    timerInterval
  );


  const q =
    questions[
      currentQuestionIndex
    ];


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
          (
            (
              Date.now() -
              questionStartedAt
            ) /
            1000
          ) *
          10
        ) /
        10
      : null;


  // =====================================
  // CURRENT PROVISIONAL SCORING
  // =====================================

  scores[
    chosenRole
  ] += 1;


  // =====================================
  // PRESERVE COMPLETE RESPONSE DATA
  //
  // questionId remains stable even if
  // the question order changes later.
  // =====================================

  responses.push({

    questionId:
      q.id,

    questionNumber:
      currentQuestionIndex + 1,

    section:
      q.section,

    choice:
      choice,

    chosenRole:
      chosenRole,

    rejectedRole:
      rejectedRole,

    roleA:
      q.rA,

    roleB:
      q.rB,

    elapsedSeconds:
      elapsedSeconds

  });


  currentQuestionIndex++;


  loadQuestion();
}



// =====================================
// SECTION SCORES
// Used only for current tie resolution
// =====================================

function getSectionScores(role) {

  const sectionScores = {

    Foundational: 0,

    Friction: 0,

    Sustainable: 0

  };


  responses.forEach(
    response => {

      if (
        response.chosenRole === role
      ) {

        sectionScores[
          response.section
        ] += 1;

      }

    }
  );


  return sectionScores;
}



// =====================================
// CONSISTENCY SCORE
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
// =====================================

function getHeadToHeadTieScore(
  role,
  tiedRoles
) {

  let tieScore = 0;


  responses.forEach(
    response => {

      if (
        response.chosenRole === role &&
        tiedRoles.includes(
          response.rejectedRole
        )
      ) {

        tieScore++;

      }

    }
  );


  return tieScore;
}



// =====================================
// RANK ROLES
// =====================================

function rankRoles() {

  const groupedByScore = {};


  roleNames.forEach(
    role => {

      const score =
        scores[role];


      if (
        !groupedByScore[
          score
        ]
      ) {

        groupedByScore[
          score
        ] = [];

      }


      groupedByScore[
        score
      ]
        .push(role);

    }
  );


  const scoreLevels =
    Object
      .keys(
        groupedByScore
      )
      .map(Number)
      .sort(
        (a, b) =>
          b - a
      );


  const rankedRoles = [];


  scoreLevels.forEach(
    scoreLevel => {

      const tiedRoles =
        groupedByScore[
          scoreLevel
        ];


      if (
        tiedRoles.length === 1
      ) {

        rankedRoles.push(
          tiedRoles[0]
        );


        return;
      }


      tiedRoles.sort(
        (
          roleA,
          roleB
        ) => {

          // -----------------------------
          // Tie-breaker 1:
          // direct comparisons
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


          if (
            headToHeadB !==
            headToHeadA
          ) {

            return (
              headToHeadB -
              headToHeadA
            );

          }


          // -----------------------------
          // Tie-breaker 2:
          // cross-section consistency
          // -----------------------------

          const consistencyA =
            getConsistencyScore(
              roleA
            );


          const consistencyB =
            getConsistencyScore(
              roleB
            );


          if (
            consistencyB !==
            consistencyA
          ) {

            return (
              consistencyB -
              consistencyA
            );

          }


          // -----------------------------
          // Deterministic fallback
          // No psychometric meaning
          // -----------------------------

          return (
            roleNames.indexOf(
              roleA
            ) -
            roleNames.indexOf(
              roleB
            )
          );

        }
      );


      rankedRoles.push(
        ...tiedRoles
      );

    }
  );


  return rankedRoles;
}



// =====================================
// SHOW RESULTS
// =====================================

function showResults() {

  clearInterval(
    timerInterval
  );


  // Restore normal page scrolling.

  document
    .documentElement
    .classList
    .remove("quiz-active");


  document
    .body
    .classList
    .remove("quiz-active");


  document
    .getElementById(
      "quiz-screen"
    )
    .classList
    .add("hide");


  document
    .getElementById(
      "results-screen"
    )
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
    complementaryPairings[
      pairKey
    ] || [];


  const recommendationsHTML =
    recommendedRoles
      .map(
        role => `

          <div class="recommended-role">

            <h3 class="section-title">
              ${roleDetails[role].fullName}
            </h3>

            <p class="profile-text">
              ${roleDetails[role].contribution}
            </p>

          </div>

        `
      )
      .join("");



  // =====================================
  // BUILD FULL ROLE DIRECTORY
  // =====================================

  const allRolesHTML =
    roleNames
      .map(
        role => `

          <li>
            <b>
              ${roleDetails[role].fullName}
            </b>
          </li>

        `
      )
      .join("");



  // =====================================
  // DISPLAY RESULTS
  // =====================================

  document
    .getElementById(
      "results-content"
    )
    .innerHTML = `


      <p class="profile-text">

        Your results describe the kinds of
        contributions you appear most naturally
        drawn to make when working with other people.

        <b>
          They are not a limit on what you can do.
        </b>

        Screenshot and share your results with
        family or friends to compare perspectives
        and discuss how accurately they reflect you.

      </p>



      <h3 class="section-title">
        Your Primary Role
      </h3>


      ${profiles[primaryRole]}



      <h3 class="section-title">
        Your Secondary Role
      </h3>


      ${profiles[secondaryRole]}



      ${buildCombinationHTML(
        primaryRole,
        secondaryRole
      )}



      <h2 class="results-section-heading">

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

        These are not rules about who you should
        work with. Think of them as useful Roles to
        look for when building a group with a broader
        mix of strengths, perspectives, and ways of
        contributing.

      </p>



      <h2 class="results-section-heading">

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


  requestAnimationFrame(
    () => {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });

    }
  );

}



// =====================================
// DOWNLOAD RESULTS AS PDF
// =====================================

function downloadResultsPDF() {

  const results =
    document.getElementById(
      "results-screen"
    );


  const rankedRoles =
    rankRoles();


  const primaryRole =
    rankedRoles[0];


  const secondaryRole =
    rankedRoles[1];


  const filename =
    `creative-role-${primaryRole.toLowerCase()}-${secondaryRole.toLowerCase()}.pdf`;


  const options = {

    margin: 0.5,


    filename:
      filename,


    image: {

      type:
        "jpeg",

      quality:
        0.98

    },


    html2canvas: {

      scale: 2,

      backgroundColor:
        "#FFFFFF",

      useCORS:
        true,

      ignoreElements:
        element => {

          return (

            element.tagName ===
              "BUTTON" ||

            element.classList.contains(
              "results-buttons"
            )

          );

        }

    },


    jsPDF: {

      unit:
        "in",

      format:
        "letter",

      orientation:
        "portrait"

    },


    pagebreak: {

      mode: [
        "css",
        "legacy"
      ]

    }

  };


  html2pdf()
    .set(options)
    .from(results)
    .save();

}
