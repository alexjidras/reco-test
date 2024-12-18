interface GetAppsParams {
  page?: number;
  sortField?: string;
  sortDir?: string;
}
interface GetAppUsersParams {
  appId: string;
}

const mockApps = [
  {
    appId: "0",
    name: "Zoom",
    category: "Video Conferencing",
    connector: "Reco",
    logos: {
      app: "https://w7.pngwing.com/pngs/1023/88/png-transparent-zoom-social-media-meeting-logo-apps-social-media-icon-thumbnail.png",
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "1",
    name: "Slack",
    category: "IM",
    connector: "Reco",
    logos: {
      app: "https://w7.pngwing.com/pngs/345/302/png-transparent-chat-slack-slack-logo-social-media-icon.png",
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "2",
    name: "XSOAR",
    category: "Security Automation",
    connector: "Reco",
    logos: {
      app: "https://storage.googleapis.com/xmcom-wp-content-uploads/1/2020/12/2cea0092-cortexfavicon-768x768.png",
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "3",
    name: "Torq",
    category: "Security Automation",
    connector: "Reco",
    logos: {
      app: "https://avatars.slack-edge.com/2022-06-02/3625977762321_0d6488cda660a4404ca8_512.png",
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "4",
    name: "Virtu",
    category: "Financial",
    connector: "Reco",
    logos: {
      app: "https://avatars.slack-edge.com/2022-06-02/3625977762321_0d6488cda660a4404ca8_512.png",
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "5",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "6",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "7",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "8",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "9",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "10",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "11",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "12",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "13",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "14",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "15",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "16",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "17",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "18",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "19",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "20",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "21",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "22",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "23",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "24",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "25",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "26",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "27",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "28",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
  {
    appId: "29",
    name: "Lorem",
    category: "Ipsum dollar sit amet",
    connector: "Reco",
    logos: {
      connector:
        "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
    },
  },
];

const mockUsers = [
  {
    id: "1",
    name: "John Snow",
    pic: "https://cdn.talkie-ai.com/talkie-user-img/63707079290959/69658155188502-2.jpeg",
  },
  {
    id: "2",
    name: "Daenerys Targaryen",
    pic: "https://imgcdn.stablediffusionweb.com/2024/10/10/0b2f47e1-1f1c-47d8-8ae2-d49d9450aa4a.jpg",
  },
  {
    id: "3",
    name: "Ned Stark",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3H1bMzcMoihDL_lhcc2-dI-1b7ixVHqVwA&s",
  },
  {
    id: "4",
    name: "Robert Baratheon",
    pic: "https://cdn.talkie-ai.com/talkie-user-img/78053984956585/134944953614417-2.jpeg",
  },
  {
    id: "5",
    name: "Cersei Lannister",
    pic: "https://neural.love/cdn/thumbnails/1ee3831b-f42a-6d6a-9138-5965227c1ca1/b0120950-ee29-5d96-ad3d-9d43fd0cbbae.webp?Expires=1767225599&Signature=4pSDmE1LT3MyKJwdA4-JeyG~mr1zY7194-KDXFJOvrSZ1ACNCTr843bDVUOn74eNNW99sGTa0Q90PHhemDsCUsE61qswSPJnv99K5oj8L04hwRlnFtNjDYbZ9-S27FKWSYqHsWZX5LO5f3fVpnkj59mS7TERysmpNqRdSAu7SpU4vbN4HH3z52-YQF7UkDeR1IWNkQWLxw8q73k0p6efIV8jUObjZewjgTLDyTqEf2kRwE7GKzm7LR4REMcxL2Pw4JuQmXb5ITe2mCKl83hRJzfipyQWXa0~1ikjlxWd6c2~VCXH01WcCY5VLMzYyW1XY9EpoFi-YIdDJqF~IXMqWA__&Key-Pair-Id=K2RFTOXRBNSROX",
  },
  {
    id: "6",
    name: "Unknown",
  },
  {
    id: "7",
    name: "Unknown",
  },
  {
    id: "8",
    name: "Unknown",
  },
  {
    id: "9",
    name: "Unknown",
  },
  {
    id: "10",
    name: "Unknown",
  },
  {
    id: "11",
    name: "Unknown",
  },
  {
    id: "12",
    name: "Unknown",
  },
];
const mockDetails = {
  appId: "0",
  name: "Zoom",
  category: "Video Conferencing & Collaboration Software",
  connector: {
    name: "Reco",
    logo: "https://cdn.prod.website-files.com/644fc991ce69ff0d3bdbeb63/654b815aaae657a2646a635e_logo_reco.svg",
  },
  users: [
    {
      id: "1",
      name: "John Snow",
      pic: "https://cdn.talkie-ai.com/talkie-user-img/63707079290959/69658155188502-2.jpeg",
    },
    {
      id: "2",
      name: "Daenerys Targaryen",
      pic: "https://imgcdn.stablediffusionweb.com/2024/10/10/0b2f47e1-1f1c-47d8-8ae2-d49d9450aa4a.jpg",
    },
    {
      id: "3",
      name: "Ned Stark",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3H1bMzcMoihDL_lhcc2-dI-1b7ixVHqVwA&s",
    },
    {
      id: "4",
      name: "Robert Baratheon",
      pic: "https://cdn.talkie-ai.com/talkie-user-img/78053984956585/134944953614417-2.jpeg",
    },
    {
      id: "5",
      name: "Cersei Lannister",
      pic: "https://neural.love/cdn/thumbnails/1ee3831b-f42a-6d6a-9138-5965227c1ca1/b0120950-ee29-5d96-ad3d-9d43fd0cbbae.webp?Expires=1767225599&Signature=4pSDmE1LT3MyKJwdA4-JeyG~mr1zY7194-KDXFJOvrSZ1ACNCTr843bDVUOn74eNNW99sGTa0Q90PHhemDsCUsE61qswSPJnv99K5oj8L04hwRlnFtNjDYbZ9-S27FKWSYqHsWZX5LO5f3fVpnkj59mS7TERysmpNqRdSAu7SpU4vbN4HH3z52-YQF7UkDeR1IWNkQWLxw8q73k0p6efIV8jUObjZewjgTLDyTqEf2kRwE7GKzm7LR4REMcxL2Pw4JuQmXb5ITe2mCKl83hRJzfipyQWXa0~1ikjlxWd6c2~VCXH01WcCY5VLMzYyW1XY9EpoFi-YIdDJqF~IXMqWA__&Key-Pair-Id=K2RFTOXRBNSROX",
    },
    {
      id: "6",
      name: "Unknown",
    },
    {
      id: "7",
      name: "Unknown",
    },
    {
      id: "8",
      name: "Unknown",
    },
    {
      id: "9",
      name: "Unknown",
    },
    {
      id: "10",
      name: "Unknown",
    },
    {
      id: "11",
      name: "Unknown",
    },
    {
      id: "12",
      name: "Unknown",
    },
  ],
};

export const getApps = async ({
  page = 1,
  sortField,
  sortDir,
}: GetAppsParams) => {
  await new Promise((res) => setTimeout(res, 1000));

  return {
    apps: mockApps.slice(page - 1, page - 1 + 10),
    pagination: {
      page,
      totalPages: Math.ceil(mockApps.length / 10),
    },
  };
};

export const getAppUsers = async ({ appId }: GetAppUsersParams) => {
  await new Promise((res) => setTimeout(res, 1000));

  return {
    users: mockUsers,
  };
};
