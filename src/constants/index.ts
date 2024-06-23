export interface Candidate {
  userName: string;
  userRole: string;
  userResumeScore: number;
  userSkillMatch: number;
  userSkill: string;
  possibleDate: Array<string>;
}

export const roles = [
  'FrontEnd Developer',
  'BackEnd Developer',
  'User Experience',
  'User Interface',
  'Project Manager'
];

export const candidate: Array<Candidate> = [
  {
    userName: 'Marco',
    userRole: 'FrontEnd Developer',
    userResumeScore: 89,
    userSkillMatch: 80,
    userSkill: 'Junior',
    possibleDate: [
      '2024-05-07',
      '2024-05-08',
      '2024-05-25',
      '2024-06-11',
      '2024-07-05'
    ]
  },
  {
    userName: 'Jeff',
    userRole: 'BackEnd Developer',
    userResumeScore: 72,
    userSkillMatch: 65,
    userSkill: 'Senior',
    possibleDate: [
      '2024-05-12',
      '2024-06-11',
      '2024-06-15',
      '2024-07-05',
      '2024-08-04'
    ]
  },
  {
    userName: 'Eric',
    userRole: 'User Experience',
    userResumeScore: 90,
    userSkillMatch: 91,
    userSkill: 'Senior',
    possibleDate: [
      '2024-05-02',
      '2024-05-05',
      '2024-06-11',
      '2024-06-15',
      '2024-07-28',
      '2024-08-30',
      '2024-08-31'
    ]
  },
  {
    userName: 'Merry',
    userRole: 'User Interface',
    userResumeScore: 56,
    userSkillMatch: 43,
    userSkill: 'Junior',
    possibleDate: [
      '2024-05-04',
      '2024-05-22',
      '2024-06-20',
      '2024-06-21',
      '2024-07-01'
    ]
  },
  {
    userName: 'John',
    userRole: 'Project Manager',
    userResumeScore: 100,
    userSkillMatch: 100,
    userSkill: 'Senior',
    possibleDate: ['2024-06-01', '2024-06-21', '2024-07-01', '2024-08-01']
  },
  {
    userName: 'Maxwell',
    userRole: 'FrontEnd Developer',
    userResumeScore: 50,
    userSkillMatch: 50,
    userSkill: 'Junior',
    possibleDate: ['2024-06-01']
  },
  {
    userName: 'Poloe',
    userRole: 'BackEnd Developer',
    userResumeScore: 80,
    userSkillMatch: 76,
    userSkill: 'Senior',
    possibleDate: ['2024-07-01']
  },
  {
    userName: 'Marco2',
    userRole: 'FrontEnd Developer',
    userResumeScore: 89,
    userSkillMatch: 80,
    userSkill: 'Junior',
    possibleDate: ['2024-08-01']
  },
  {
    userName: 'Jeff2',
    userRole: 'BackEnd Developer',
    userResumeScore: 72,
    userSkillMatch: 65,
    userSkill: 'Senior',
    possibleDate: ['2024-06-01', '2024-07-11', '2024-08-09']
  },
  {
    userName: 'Eric2',
    userRole: 'User Experience',
    userResumeScore: 90,
    userSkillMatch: 91,
    userSkill: 'Senior',
    possibleDate: [
      '2024-05-14',
      '2024-05-08',
      '2024-05-15',
      '2024-06-14',
      '2024-07-08',
      '2024-07-15'
    ]
  },
  {
    userName: 'Merry2',
    userRole: 'User Interface',
    userResumeScore: 56,
    userSkillMatch: 43,
    userSkill: 'Junior',
    possibleDate: ['2024-06-11', '2024-07-07', '2024-07-15']
  },
  {
    userName: 'John2',
    userRole: 'Project Manager',
    userResumeScore: 100,
    userSkillMatch: 100,
    userSkill: 'Senior',
    possibleDate: ['2024-06-17', '2024-07-02', '2024-08-15']
  },
  {
    userName: 'Maxwell2',
    userRole: 'FrontEnd Developer',
    userResumeScore: 50,
    userSkillMatch: 50,
    userSkill: 'Junior',
    possibleDate: ['2024-06-04', '2024-06-06', '2024-08-22']
  },
  {
    userName: 'Poloe2',
    userRole: 'BackEnd Developer',
    userResumeScore: 80,
    userSkillMatch: 76,
    userSkill: 'Senior',
    possibleDate: ['2024-07-04', '2024-07-06', '2024-08-22']
  },
  {
    userName: 'Marco3',
    userRole: 'FrontEnd Developer',
    userResumeScore: 89,
    userSkillMatch: 80,
    userSkill: 'Junior',
    possibleDate: ['2024-05-04']
  },
  {
    userName: 'Jeff3',
    userRole: 'BackEnd Developer',
    userResumeScore: 72,
    userSkillMatch: 65,
    userSkill: 'Senior',
    possibleDate: ['2024-06-24', '2024-07-18', '2024-07-25']
  },
  {
    userName: 'Eric3',
    userRole: 'User Experience',
    userResumeScore: 90,
    userSkillMatch: 91,
    userSkill: 'Senior',
    possibleDate: ['2024-05-24', '2024-07-08', '2024-08-25']
  },
  {
    userName: 'Merry3',
    userRole: 'User Interface',
    userResumeScore: 56,
    userSkillMatch: 43,
    userSkill: 'Junior',
    possibleDate: [
      '2024-05-24',
      '2024-05-25',
      '2024-05-26',
      '2024-06-08',
      '2024-07-25'
    ]
  },
  {
    userName: 'John3',
    userRole: 'Project Manager',
    userResumeScore: 100,
    userSkillMatch: 100,
    userSkill: 'Senior',
    possibleDate: ['2024-06-24', '2024-07-08', '2024-07-25']
  },
  {
    userName: 'Maxwell3',
    userRole: 'FrontEnd Developer',
    userResumeScore: 50,
    userSkillMatch: 50,
    userSkill: 'Junior',
    possibleDate: ['2024-05-22', '2024-05-28', '2024-07-25']
  },
  {
    userName: 'Poloe3',
    userRole: 'BackEnd Developer',
    userResumeScore: 80,
    userSkillMatch: 76,
    userSkill: 'Senior',
    possibleDate: ['2024-06-12']
  }
];
