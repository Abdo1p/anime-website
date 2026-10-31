const animeDatabase = [
    {
        id: 1,
        title: "Solo Leveling",
        genres: "خيال، مغامرات، أكشن",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500",
        badge: "موسم جديد",
        description: "في عالم مهدد بالبوابات والوحوش، يحصل الصياد الأضعف سونغ جين وو على فرصة فريدة للتطور بلا حدود.",
        episodes: [
            {
                title: "الحلقة 1: أنا الصياد الأضعف",
                duration: "23 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/t1H4hT_8Z1Y" },
                    { name: "احتياطي", url: "https://www.youtube.com/embed/1U86c4wXgP8" }
                ]
            },
            {
                title: "الحلقة 2: إذا لم تكن قوياً...",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/1U86c4wXgP8" },
                    { name: "احتياطي", url: "https://www.youtube.com/embed/t1H4hT_8Z1Y" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Demon Slayer",
        genres: "شونين، تاريخي، خارق للطبيعة",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
        badge: "مكتمل",
        description: "تانجيرو يشرع في رحلة قاسية ومخيفة ليصبح صائد شياطين وينقذ أخته نيزوكو.",
        episodes: [
            {
                title: "الحلقة 1: القسوة",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/VQ6Ta6elPHo" },
                    { name: "احتياطي", url: "https://www.youtube.com/embed/9bZkp7q19f0" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Jujutsu Kaisen",
        genres: "أكشن، خيال مظلم، شونين",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500",
        badge: "مستمر",
        description: "يوجي إيتادوري يبتلع اصبعاً ملعوناً خطيراً ليجد نفسه وسط عالم صاخب من السحرة واللعنات.",
        episodes: [
            {
                title: "الحلقة 1: ذكريات اللعنة",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/40u2IQpICsw" },
                    { name: "احتياطي", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Attack on Titan",
        genres: "أكشن، دراما، خيال",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500",
        badge: "أسطوري",
        description: "إيرين ييغر يقسم على إبادة العمالقة بعد أن تسببوا في تدمير مدينته ومقتل والدته.",
        episodes: [
            {
                title: "الحلقة 1: إلى إيرين في ذلك اليوم",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/M_OauHnAFc4" },
                    { name: "احتياطي", url: "https://www.youtube.com/embed/t1H4hT_8Z1Y" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "One Piece",
        genres: "شونين، مغامرات، كوميديا",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500",
        badge: "أسطوري",
        description: "مونكي دي لفي ينطلق في رحلة بحرية برفقة طاقمه للبحث عن الكنز الأسطوري ونبش لقب ملك القراصنة.",
        episodes: [
            {
                title: "الحلقة 1: أنا لفي! الرجل الذي سيصبح ملك القراصنة",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/t1H4hT_8Z1Y" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Naruto Shippuden",
        genres: "أكشن، شونين، مغامرات",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500",
        badge: "مكتمل",
        description: "ناروتو أوزوماكي يعود بعد تدريب طويل وقاسٍ لمواجهة الأخطار التي تهدد عالم النينجا وصديقه ساسكي.",
        episodes: [
            {
                title: "الحلقة 1: عودة الديار",
                duration: "23 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/1U86c4wXgP8" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Hunter x Hunter",
        genres: "مغامرات، شونين، خيال",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
        badge: "أسطوري",
        description: "غون فريكس يكتشف أن والده الذي ظن أنه ميّز لا يزال حياً، فيقرر خوض امتحان الصيادين للبحث عنه.",
        episodes: [
            {
                title: "الحلقة 1: رحيل والانطلاق",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/VQ6Ta6elPHo" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Bleach: Thousand-Year Blood War",
        genres: "أكشن، خارق للطبيعة، شونين",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500",
        badge: "موسم جديد",
        description: "إيتشيغو كوروساكي يعود لمواجهة التهديد الأكبر لعالم الأرواح في حرب الدم الأبدية.",
        episodes: [
            {
                title: "الحلقة 1: عاصفة الدم",
                duration: "24 دقيقة",
                servers: [
                    { name: "رئيسي (HD)", url: "https://www.youtube.com/embed/40u2IQpICsw" }
                ]
            }
        ]
    }
];
