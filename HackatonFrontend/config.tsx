export const avatars = [
  require('@/assets/images/avatar1.png'),
  require('@/assets/images/avatar2.png'),
  require('@/assets/images/avatar3.png'),
  require('@/assets/images/avatar4.png'),
  require('@/assets/images/avatar5.png'),
  require('@/assets/images/avatar6.png'),
]


export const categoryList = [
  {
    'image': require('@/assets/images/linus.jpg'),
    title: 'Linus',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: [
      {
        "message": "The /etc/shadow file in Linux is used to store:",
        "questions": ["filesystem information", "various password information", "root user shell", "command aliases"],
        "response": 2
      },
      {
          "message": "What is the purpose of ‘at’ command?",
          "questions": ["To execute a command/commands at a specific time.", "To execute a command/commands at a specific request.", "To execute a command/commands on a specific condition.", "To execute a command/commands only when the user has logged in."],
          "response": 1
      },
      {
          "message": "What is the login name of the administrator in Linux?",
          "questions": ["root", "administrator", "admin", "All of the mentioned", "None of the mentioned"],
          "response": 1
      },
      {
          "message": "Which command can be used to display file contents in octal?",
          "questions": ["od", "octal", "oshow", "oct"],
          "response": 1
      },
      {
          "message": "How to dump pod logs, with label name=myLabel (stdout) in Kubernetes",
          "questions": ["kubectl log name=myLabel", "kubectl pod -l name=myLabel", "kubectl logs -l name=myLabel", "kubectl logs -l .name[*]=myLabel"],
          "response": 3
      }
    ]
  },
  {
    'image': require('@/assets/images/devops.webp'),
    title: 'DevOps',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: [
      {
          "message": "Which Process Validates And Configures Data For The Api Objects Like Pods, Services?",
          "questions": ["kube-apiserver process validates and configures data for the api objects.", "kube-apiserver process validates and configures data for the gui objects.", "kube-apiserver process validates and configures data for the cli objects."],
          "response": 1
      },
      {
          "message": "_______ manages the assigning nodes to pods depending on resource availability.",
          "questions": ["Etcd", "Flanneld", "Scheduler", "Kubectl"],
          "response": 3
      },
      {
          "message": "What are Ansible ad-hoc commands?",
          "questions":["Ansible ad-hoc commands are commands which helps you execute simple tasks without the need of creating playbooks", "Ansible ad-hoc commands are also known as Ansible playbooks"],
          "response":1
      },
      {
          "message": "Kubernetes is written in",
          "questions":["C++", "Go", "Python", "Java spring framework"],
          "response":2
      },
      {
          "message": "To create a new deployment in kubernetes, use the command",
          "questions": ["kubernetes set deployment", "kubernetes get deployment", "kubectl run", "kubectl deploy"],
          "response":3
      }
    ]
  },
  {
    'image': require('@/assets/images/robotic.jpg'),
    title: 'Robotique',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: []
  },
  {
    'image': require('@/assets/images/cybersecurity.jpg'),
    title: 'Cybersecurite',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: []
  },
  {
    'image': require('@/assets/images/ar_vr.jpg'),
    title: 'Realite virtuelle',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: []
  },
  {
    'image': require('@/assets/images/data_ia.jpg'),
    title: 'Data / IA',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: []
  },
  {
    'image': require('@/assets/images/iot.png'),
    title: 'Objets connectes',
    description: 'Velit sit laborum pariatur incididunt reprehenderit non laborum do anim sunt. Ullamco cupidatat reprehenderit do ut enim non proident consectetur consequat duis eu. Veniam exercitation occaecat enim sit labore aliqua tempor labore incididunt anim fugiat. Nulla sint non qui ea cupidatat commodo minim ullamco veniam dolor ex velit. Adipisicing duis consequat pariatur in minim fugiat voluptate incididunt ut. Amet excepteur ea laboris dolore ut. Sint aliquip incididunt commodo velit voluptate sunt fugiat veniam eu.\
      Eiusmod consequat aliquip ullamco nisi enim eiusmod. Lorem ex laboris laboris deserunt aliquip nisi amet. Lorem laboris est consectetur Lorem adipisicing ex tempor anim aliquip voluptate ullamco consequat. Excepteur excepteur et Lorem sunt mollit reprehenderit cillum laborum proident. Ea laboris consequat excepteur fugiat Lorem labore culpa adipisicing irure elit. Occaecat nisi Lorem veniam exercitation elit veniam adipisicing.\
      Culpa irure duis amet consectetur aliqua officia sunt tempor dolor occaecat tempor excepteur eiusmod. Tempor aliquip amet ipsum do nostrud culpa ex tempor Lorem voluptate dolor. Sit laborum nostrud dolore laboris voluptate exercitation velit ex laborum ea laborum tempor.',
    questions: [
      {
        message: "msg",
        questions: ['Lol', 'Lol', 'Lol', 'Lol'],
        response: 1,
      },
      {
        message: "msg2",
        questions: ['Lol1', 'Lol', 'Lol', 'Lol'],
        response: 1,
      },
      {
        message: "msg3",
        questions: ['Lol2', 'Lol', 'Lol', 'Lol'],
        response: 1,
      },
    ],

  },
]
