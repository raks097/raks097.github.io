export const projects = [
    {
        id: 'enterprise-rag',
        tab: 'Enterprise RAG',
        title: 'Retrieval-Augmented Generation for Enterprise Support Automation',
        shortDesc: 'GenAI, LangChain',
        organization: 'NCR Corporation',
        period: '2023',
        icon: 'chat',
        image: '/images/ncr.png',
        description: 'An innovative GenAI assistant that resolves technician tickets, unlocking self-service for 5K+ field agents with high-recall retrieval grounded in NCR\'s knowledge base.',
        details: [
            'Built a GenAI assistant (Azure OpenAI + LangChain) that resolves technician tickets, unlocking self-service for 5K+ field agents.',
            'Curated FAISS + ChromaDB vector stores with ada-002 embeddings to deliver high-recall retrieval grounded in NCR\'s knowledge base.',
        ],
        tech: ['Azure OpenAI', 'LangChain', 'FAISS', 'GPT-4o'],
        links: []
    },
    {
        id: 'ai-forest',
        tab: 'CapuchinAI',
        title: 'CapuchinAI: Field-Deployable Cognition Testing',
        shortDesc: 'YOLOv7, Raspberry Pi',
        organization: 'Georgia Tech',
        period: '2023',
        icon: 'vision',
        image: '/images/yolo_v7.gif',
        description: 'A field-deployable touchscreen system integrating real-time YOLOv7 facial recognition (>97% accuracy) with automated cognitive testing for wild primates—bridging the gap between lab and field cognition research.',
        details: [
            'Developed CapuchinAI: a Raspberry Pi-driven apparatus combining YOLOv7 facial recognition with touchscreen stimuli and automated reward delivery for wild primate studies.',
            'Achieved >97% accuracy identifying individual capuchins, enabling autonomous, individualized task administration without researcher intervention.',
            'Deployed at Taboga Forest Reserve: 16 wild capuchins interacted voluntarily, 10 learned to trigger rewards, and 8 formed robust screen-reward associations within two weeks.',
            'Honored with the AI.Humanity seed grant from Georgia Tech and Emory University.'
        ],
        tech: ['YOLOv7', 'Raspberry Pi', 'PyTorch', 'Edge Deployment', 'Facial Recognition', 'Computer Vision'],
        links: [
            { text: 'Publication', url: 'https://www.biorxiv.org/content/10.1101/2025.11.07.687266v2.full' }
        ]
    },
    {
        id: 'autonomous-mobility',
        tab: 'Autonomous Mobility',
        title: 'Generation of Realistic Vehicle Trajectories from Video Streams',
        shortDesc: 'Deep Learning, CARLA',
        organization: 'Siemens Technology',
        period: '2020',
        icon: 'autonomous',
        image: '/images/demo.gif',
        description: 'Engineered an OpenCV + Mask R-CNN + IOU tracking pipeline to convert raw traffic footage into 750K+ labeled trajectories for autonomous navigation R&D.',
        details: [
            'Engineered an OpenCV + Mask R-CNN + IOU tracking pipeline to convert raw traffic footage into 750K+ labeled trajectories.',
            'Explored CARLA-based reinforcement learning policies with TensorFlow + OpenAI Gym to accelerate autonomous navigation R&D.',
            'Researched multiple behavioral models for autonomous navigation using Reinforcement (RL) and Imitation Learning (IL).'
        ],
        tech: ['OpenCV', 'Mask R-CNN', 'IOU Tracking', 'CARLA', 'Reinforcement Learning', 'OpenAI Gym', 'TensorFlow'],
        links: []
    },
    {
        id: 'agent-based-modelling',
        tab: 'Agent-Based Modelling',
        title: 'Data Localization & Drug-Resistant Diseases ABMs',
        shortDesc: 'Research, Simulation',
        organization: 'Published Research',
        period: '2020',
        icon: 'research',
        image: '/images/ABM.PNG',
        description: 'Agent-based gravity trade model quantifying cross-border digital service flows — published in Data-centric Living and cited by the UN Digital Economy Report 2021.',
        details: [
            'Developed an agent-based gravity trade model quantifying cross-border digital service flows under data regulations — published in Data-centric Living and cited by the UN Digital Economy Report 2021.',
            'Built a RepastCity agent-based epidemic model simulating M. tuberculosis spread across urban GIS networks, uncovering behavioral patterns in drug-resistant vs. susceptible strains.',
        ],
        tech: ['RepastCity', 'Java', 'Agent-Based Modeling', 'GIS Layers'],
        links: [
            { text: 'Publication', url: 'https://doi.org/10.1016/j.telpol.2020.102022' },
            { text: 'GitHub', url: 'https://github.com/raks097/Agent-Based-Modeling-And-Simulation-of-Drug-Resistant-Diseases-' },
        ]
    },
    {
        id: 'neural-style-transfer',
        tab: 'Neural Style Transfer',
        title: 'Neural Style Transfer Suite',
        shortDesc: 'Deep Learning, VGG19',
        organization: 'Personal Project',
        period: '2019',
        icon: 'creative',
        image: '/images/NST.PNG',
        description: 'Multi-resolution VGG19 pipelines with perceptual loss tuning for high-fidelity style transfer, optimized for real-time inference on consumer GPUs.',
        details: [
            'Implemented multi-resolution VGG19 pipelines with perceptual loss tuning for high-fidelity style transfer.',
            'Developed different versions including VGG19-based single style transfer and segmentation style transfer.'
        ],
        tech: ['VGG19', 'TensorBoard', 'TensorFlow', 'Python'],
        links: [
            { text: 'GitHub', url: 'https://github.com/raks097/nn_style_transfer' }
        ]
    }
];
