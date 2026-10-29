export interface ResourceCategory {
  id: string;
  title: string;
  summary: string;
  practicalPoints: readonly string[];
}

/**
 * Grounded, practical categories for people figuring out their next step.
 * Deliberately avoids speculation or unsupported claims about "AI-proof" jobs.
 */
export const WHAT_NOW_RESOURCES: readonly ResourceCategory[] = [
  {
    id: 'finding-another-job',
    title: 'Finding another job',
    summary:
      'When your role is cut or restructured, your underlying judgment, domain knowledge, and ability to work with people still carry weight.',
    practicalPoints: [
      'Reframe your resume around outcomes, decision-making, and stakeholder coordination rather than routine task output.',
      'Look at adjacent teams or organizations where human review, client trust, and complex problem-solving remain central.',
      'Let former colleagues and peers know openly that you are looking—warm referrals consistently move faster than cold applications.',
    ],
  },
  {
    id: 'learning-ai',
    title: 'Learning AI',
    summary:
      'Understanding how current AI tools work—and where they fail—can help you evaluate roles that require human oversight alongside automation.',
    practicalPoints: [
      'Experiment hands-on with tools relevant to your field so you can speak concretely about their strengths and limitations.',
      'Focus on practical workflows: verification, quality control, structured prompting, and data privacy basics.',
      'Skip expensive "AI mastery" bootcamps; start with official documentation, free foundational courses, and small personal tests.',
    ],
  },
  {
    id: 'changing-careers',
    title: 'Changing careers',
    summary:
      'Sometimes a layoff is a signal to pivot toward work with different day-to-day dynamics, without pretending any single career path is permanently immune to change.',
    practicalPoints: [
      'Inventory your transferable skills: project scoping, conflict resolution, compliance, teaching, operations, or hands-on craft.',
      'Talk directly with people currently working in fields you are curious about before committing to long retraining programs.',
      'Look into regional workforce development grants, community college certificates, or employer-sponsored apprenticeships.',
    ],
  },
  {
    id: 'building-something',
    title: 'Building something',
    summary:
      'Independent consulting, small services, or niche products can create breathing room and give you agency over your schedule.',
    practicalPoints: [
      'Start with a narrow, clearly defined problem you already know how to solve for a specific group of customers.',
      'Keep upfront costs near zero—validate whether people will pay for a service or small tool before spending months building.',
      'Partner with others on the bench who have complementary skills in engineering, design, sales, or operations.',
    ],
  },
  {
    id: 'taking-a-break',
    title: 'Taking a break',
    summary:
      'Losing a role you worked hard to build carries real shock and grief. You do not have to figure out the next ten years this afternoon.',
    practicalPoints: [
      'Handle the immediate practicalities first: severance review, unemployment benefits, healthcare coverage, and a realistic runway budget.',
      'Give yourself permission to step away from job boards and industry news for set hours each day.',
      'Spend time outdoors, reconnect with people outside your industry, and remember that your worth is not defined by a job title.',
    ],
  },
];
