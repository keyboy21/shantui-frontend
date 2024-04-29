'use client'
import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import styles from './panorama.module.css'
import { cn } from "@/utils/cn.util";
import { Container } from "@/components/ui/Container";

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

    const bindImageSrc = (src: string) => `https://iili.io/${src}.jpg`;

    const projection = useMemo(() => new EquirectProjection({
        src: bindImageSrc('HGJ5pRI')
    }), [bindImageSrc]);

    return (
        <section className="lg:mt-[100px]">
            <Container className="">
                <View360 className={cn(styles.view360container)} projection={projection} />
            </Container>
        </section>
    )
}