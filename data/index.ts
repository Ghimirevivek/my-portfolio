export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'Collaborating effectively with clients for seamless communication',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-[50%] h-full',
    titleClassName: 'justify-end',
    // img: "/b1.svg",
    spareImg: '',
  },
  {
    id: 2,
    title: 'Adaptable to different time zones for smooth project communication',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently diving into Testing Frameworks and Practices',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Interested in collaborating on a project?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Zoom Clone - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/yoom.webp',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://zoom-clone-brown-three.vercel.app/',
  },
  {
    id: 2,
    title: 'Car Rental Web App',
    des: 'Developed a car rental platform with secure user authentication.',
    img: '/rental.webp',
    // iconLists: ['/mern.svg', '/tail.svg', '/js.svg', '/jwt.svg'],
    iconLists: [
      '/nodejs.svg',
      '/tail.svg',
      '/mongodb.svg',
      '/react-2.svg',
      '/javascript.svg',
    ],
    link: 'https://project-vt.vercel.app/',
  },
  {
    id: 3,
    title: 'Food Delivery App',
    des: 'Created a mobile-friendly food delivery app with Firebase authentication.',
    img: '/fooddev.webp',
    // iconLists: ['/react.svg', '/firebase.svg', '/tail.svg', '/js.svg'],
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/javascript.svg',
      '/firebase.svg',
      '/css.svg',
    ],
    link: 'https://restaurant-app-e0343.web.app/',
  },
  {
    id: 4,
    title: 'Canadian Immigration Website',
    des: 'Built from scratch for a client, this platform provides comprehensive information on visa options, eligibility assessments, and immigration resources. Enhanced the site’s accessibility, responsiveness, and usability to cater to a diverse audience.',
    img: '/aquarian.webp',
    // iconLists: ['/html.svg', '/css.svg', '/js.svg', '/react.svg'],
    iconLists: [
      '/react-2.svg',
      '/tail.svg',
      '/javascript.svg',
      '/mongodb.svg',
      '/html.svg',
    ],
    link: 'https://iaquarian.com',
  },
];

export const testimonials = [
  {
    quote:
      'Vivek’s commitment to excellence and innovative approach have been instrumental in enhancing our development processes. His ability to deliver seamless user experiences and establish strong professional relationships has left a lasting positive impact on our organization.',
    name: 'Praveen Soini',
    title: 'Director of SN Silos',
  },
  {
    quote:
      "Vivek’s remarkable performance as a Full Stack Developer intern has been invaluable. His technical expertise, dedication to quality code, and proactive problem-solving have greatly contributed to our projects’ success. Vivek's collaborative approach and strong work ethic made him an asset to our team.",
    name: 'Praveen Soini',
    title: 'Director of SN Silos',
  },
  {
    quote:
      'Vivek’s commitment to excellence and innovative approach have been instrumental in enhancing our development processes. His ability to deliver seamless user experiences and establish strong professional relationships has left a lasting positive impact on our organization.',
    name: 'Praveen Soini',
    title: 'Director of SN Silos',
  },
  {
    quote:
      "Vivek’s remarkable performance as a Full Stack Developer intern has been invaluable. His technical expertise, dedication to quality code, and proactive problem-solving have greatly contributed to our projects’ success. Vivek's collaborative approach and strong work ethic made him an asset to our team.",
    name: 'Praveen Soini',
    title: 'Director of SN Silos',
  },
];

export const companies = [
  {
    id: 1,
    name: 'NextJS',
    img: '/next.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'React',
    img: '/re.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'Typescript',
    img: '/ts.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'Node',
    img: '/nodejs.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'TailwindCss.',
    img: '/tail.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'ReactJs Developer | CyberVision Infotech',
    desc: 'Built a social platform with live streaming, API integrations, and optimized React components.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Frontend Developer | Netpuppys Technologies',
    desc: 'Built a Canadian immigration site with improved accessibility and performance using React Dev Tools and Context API.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern | SN Silos',
    desc: 'Developed a full-stack app for an agrotech startup using React, Tailwind, and Express for seamless integration.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Freelance Full Stack Developer',
    desc: 'Led the development of a Car rental app with a focus on scalability and secure authentication.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Ghimirevivek',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: '/',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/vivek-ghimire-045a46161/',
  },
];
