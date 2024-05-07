'use client'
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn.util";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Scane {
    id: number;
    scane: string;
    hostspots: {
        id: number;
        yaw: number;
        pitch: number;
        scane: string;
        name: string;
    }[]
}

const hotspotScane = [
    {
        id: 1,
        scane: 'https://iili.io/HGJ5ZKv.jpg',
        hostspots: [
            {
                id: 2,
                yaw: 0,
                pitch: 0,
                name: 'Go to Second',
                scane: 'https://iili.io/HGJ5sVa.jpg'
            },
            {
                id: 3,
                yaw: -100,
                pitch: -12,
                name: 'Go to Third',
                scane: 'https://iili.io/HGJ5LiJ.jpg'
            }
        ]
    },
    {
        id: 2,
        scane: 'https://iili.io/HGJ5sVa.jpg',
        hostspots: [
            {
                id: 1,
                yaw: 100,
                pitch: 12,
                name: 'Go to First',
                scane: 'https://iili.io/HGJ5ZKv.jpg',
            },
            {
                id: 3,
                yaw: -100,
                pitch: -12,
                name: 'Go to Third',
                scane: 'https://iili.io/HGJ5LiJ.jpg'
            }
        ]
    },
    {
        id: 3,
        scane: 'https://iili.io/HGJ5LiJ.jpg',
        hostspots: [
            {
                id: 1,
                yaw: 0,
                pitch: 0,
                name: 'Go to First',
                scane: 'https://iili.io/HGJ5ZKv.jpg',
            },
            {
                id: 2,
                yaw: -100,
                pitch: -12,
                name: 'Go to Second',
                scane: 'https://iili.io/HGJ5sVa.jpg'
            },
        ]
    }
]

export const PanoramaView = () => {

    const DQ11 = [
        "HGJ5ZKv",
        "HGJ5sVa",
        "HGJ5LiJ",
        "HGJ5tlR",
        "HGJ5DSp",
        "HGJ5mHN",
        "HGJ5pRI",
        "HGJ5yNt"
    ];

    const viewerRef = useRef<View360>(null);
    const [currentScane, setCurrentScane] = useState<Scane | undefined>(hotspotScane[0])

    const projection = useMemo(() => new EquirectProjection({
        src: currentScane?.scane ?? 'https://iili.io/HGJ5ZKv.jpg'
    }), [currentScane]);

    const changeRoom = useCallback((id: number) => {
        const NextScane = hotspotScane.find(data => data.id === id)
        setCurrentScane(NextScane)
    }, [])

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (viewerRef.current)
            viewerRef.current.hotspot.refresh();
    }, [currentScane]);

    return (
        <section className="mt-[100px]">
            <Container className="py-10">
                <View360 gyro ref={viewerRef} className={cn('h-[500px] max-w-[800px] mx-auto')} projection={projection} >
                    <div className="view360-hotspots">
                        {currentScane?.hostspots.map((data) => (
                            <div key={data.id}
                                onClickCapture={() => changeRoom(data.id)}
                                className="view360-hotspot cursor-pointer text-black underline"
                                data-yaw={data.yaw}
                                data-pitch={data.pitch}
                            >
                                {data.name}
                            </div>
                        ))}
                    </div>
                </View360>
            </Container>
        </section>
    )
}