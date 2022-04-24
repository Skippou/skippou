import profilepicture from './gerrit.jpg';

export const CVData = {
    personalData: {
      name: 'Gerrit Cloete',
      title: 'Chemical Engineer | Software Developer',
      image: profilepicture,
      // image: 'https://drive.google.com/uc?export=download&id=1Qr9v5VH4j4z0j9HIh8pQZqecqu046yUr',
      contacts: [
        { type: 'email', value: 'work+gerritcloete.gj@gmail.com' },
        { type: 'phone', value: '+27 61 486 0600' },
        { type: 'location', value: 'Pretoria, South Africa' },
        { type: 'website', value: 'skippou.github.io/skippou' },
        { type: 'linkedin', value: 'linkedin.com/in/gerrit-cloete-6bb45a103' },
        { type: 'github', value: 'github.com/Skippou' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'Qualified chemical engineer from South Africa with 6+ years of experience. Skilled in business development, business automation, project management and technical management of solar products. At The Sun Pays, assisted expansion of a 5-fold yearly turnover increase of the previously stagnant family business; from ~$800k to ~$4 million during the financial years 2018/19-2021/22. Seeking for a new challenge to improve processes through automation and digitisation.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'B.Eng. Chemical Engineering',
            authority: 'North-West University (NWU)',
            authorityWebSite: 'https://www.nwu.ac.za/',
            rightSide: '2012 - 2015'
          },
          {
            title: 'M.Eng. Mechanical Engineering',
            authority: 'North-West University (NWU)',
            authorityWebSite: 'https://www.nwu.ac.za/',
            rightSide: '2016 - 2018'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Lead Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m working as a lead developer yeeeey!',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2017.10 - Present',
            descriptionTags: ['Javascript', 'React']
          },
          {
            title: 'Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m using ReactJS and working as a front-end developer',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: 'Little info about company',
            datesBetween: '2016.8 - 2017.10'
          },
          {
            title: 'Intern',
            company: 'Some Software Example INC',
            description: 'I was warming up.',
            companyWebSite: 'http://someexamplecompany.com',
            companyMeta: 'SF USA',
            datesBetween: '2012.06 - 2012.10'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: 'Optional',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Company Name',
            description: 'Optional',
            items: [
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Conferences & Certificates',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityWebSite: 'https://www.someconf.somesome'
          },
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityMeta: 'Speaker',
            authorityWebSite: 'https://www.someconf.somesome',
            rightSide: 'test'
          },
          {
            title: 'Some Conferences / 2012',
            authorityMeta: 'Speaker'
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Professional'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS', 'SQL', 'SomeTech', 'CoolTech']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Poetry']
      }
    ]
  }