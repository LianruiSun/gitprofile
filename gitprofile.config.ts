// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lianruisun', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Dual-Mode Language-Model Mobile Assistant: A Multilingual Application Integrated with InnoSpire Glasses for Supporting Visually Impaired and Blind Individuals',
          description:
            'Dual-Mode Language Model Mobile Assistant is a powerful Android application designed to assist visually impaired and blind (VIB) individuals with navigating daily life. Paired with InnoSpire Smart Glasses, the app leverages both online and offline AI to provide real-time object recognition, environment descriptions, and public transport guidance in English, Mandarin, Cantonese, and Spanish.Whether connected to the internet or not, users can take or upload images, speak or type queries, and receive accurate spoken feedback through integrated Speech-to-Text (STT) and Text-to-Speech (TTS) systems. It combines cutting-edge models like GPT-4o (online) and Phi-3 Mini with YOLOv5 (offline) to deliver reliable and context-aware responses on the go.Perfect for navigating public spaces, identifying objects, and gaining independence, this app offers fast, multilingual, and intelligent assistance, making the world more accessible for VIB users.',
          imageUrl:
            'https://i.imgur.com/DNVDNpE.png',
          // link: 'https://example.com',
        },
        {
          title: 'WPI healthy classroom website',
          description:
            'A web-based dashboard to monitor classroom environments using Awair Omni sensors, in collaboration with Professor Shichao Liu.',
          imageUrl:
            'https://i.imgur.com/e9ePe7d.png',
          link: 'https://wpiclassroom.netlify.app/',
        },
        {
          title: 'Hospital Desktop Application Development',
          description:
            'A desktop application cooperated with Mass General Brigham using Java, Scenebuilder, CSS, and MySQL.',
          imageUrl:
            'data:image/png;base64,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',
          link: 'https://github.com/orgs/CS3733-D23-Team-N/',
        },
        {
          title: 'Personal Game development (2022)',
          description:
            'A platformer 2D game with fighting elements using Unity and C#.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/426196?s=200&v=4',
          link: 'https://darrrrrrrrrcy.itch.io/darcys-first-game',
        },
        {
          title: 'Dianping Web Crawler',
          description:
            'A web crawler using Python and BeautifulSoup to extract user data and reviews from https://www.dianping.com/, analyzing user locations and average consumption ratings, and shared the information with the local restaurant.',
          imageUrl:
            'https://149860134.v2.pressablecdn.com/wp-content/uploads/pythoned.png',
          // link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Lianrui Sun',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lianrui-sun-5638392b4',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.lianruisun.com',
    phone: '',
    email: 'lianruisun1020@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'ReactNative',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
  ],
  experiences: [
    {
      company: 'Worcester Polytechnic Institute',
      position: 'Teaching Assistant',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://www.wpi.edu/',
    },
    {
      company: 'AYCG, Inc',
      position: 'Full-Stack Developer Intern',
      from: 'July 2024',
      to: 'September 2024',
      companyLink: '',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'New York University',
      degree: 'Master',
      from: '2025',
      to: '2027',
    },
    {
      institution: 'Worcester Polytechnic Institute',
      degree: 'Bachelor',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Dual-Mode Language-Model Mobile Assistant: A Multilingual Application Integrated with InnoSpire Glasses for Supporting Visually Impaired and Blind Individuals',
      conferenceName: '',
      journalName: '',
      authors: 'Lianrui Sun, Andrew Mesa, Yitao Hong, Chun-Kit Ngan',
      // link: '',
      description:
        'This paper presents a comprehensive assistive solution designed for visually impaired and blind (VIB) users: a dual-mode, multilingual mobile assistant integrated with InnoSpire Smart Glasses. The system combines both online and offline processing capabilities using state-of-the-art language models (GPT-4o for online, Phi-3-mini for offline) and YOLOv5 object detection, supporting English, Spanish, Mandarin, and Cantonese. Key features include automatic speech recognition, text-to-speech output, and real-time object recognition, enabling VIB individuals to identify objects, receive navigational aid, and interact with their environment even without internet access.',
    },
    {
      title: 'Developing a Rating Dashboard of Healthy Classrooms',
      conferenceName: '',
      journalName: '',
      authors: 'Lianrui Sun',
      link: 'https://digital.wpi.edu/concern/student_works/jh343x65c?locale=de',
      description:
        "This study addresses the significant gap in understanding the impact of indoor classroom environments on student learning by developing a dynamic rating database for assessing classroom healthiness. Utilizing Awair Omni sensors, the project monitored temperature, air quality, humidity, noise, and lighting across ten classrooms at Worcester Polytechnic Institute. The methodology combined quantitative data from environmental sensors with qualitative feedback via student surveys. Findings revealed that while most classrooms met basic environmental standards, improvements were necessary in temperature regulation, humidity levels, and CO₂ concentrations to foster optimal learning conditions. The study highlights the critical influence of the physical classroom environment on academic performance, recommending upgrades to HVAC systems, improved ventilation, and enhanced feedback mechanisms to create healthier learning spaces. By bridging the gap in indoor environmental monitoring, this project lays the groundwork for future research and implementation strategies to enhance educational outcomes through optimized classroom environments. The investigation underscores the profound impact of indoor classroom conditions on students' learning efficiency, proposing targeted interventions to facilitate temperature control, humidity levels, CO2 concentration, and overall air quality.",
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
