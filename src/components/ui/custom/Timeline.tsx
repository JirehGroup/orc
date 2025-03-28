// @/components/ui/custom/Timeline.tsx

import React from "react";
import { Timeline } from "@/components/ui/aceternity/timeline";

export function TimelinePage() {
    const data = [
        {
            title: "Mullata",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Nagaa, jaalalaa, walkabajuu fi faaydaa waliin irratti kan walqixxummaan amantaa mirkanaa’e Oromiyaa duroomte arguu
                    </p>
                </div>
            ),
        },
        {
            title: "Ergama",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Dhaabbileen amantaa miseensa ta’an amantaa isaanii nagaa fi bilisaan akka gaggeeffatanu
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        dandeessisuu mirga amantaa isaanii heera mootummaatiin mirkanaa’eef kabajsiisuu fi dirqama
                        saanii bahachuun walkabajuu fi nageenyaan guddina biyyaa waliiniitti hojjachuu.
                    </p>
                </div>
            ),
        },
        {
            title: "Dhuudhaalee",
            content: (
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Garaagarummaa keessatti tokkumma/gamtaa uumuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Dhala nama/ilmaan nanootaatiif kabajaa kennuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Walqixxummaa amantaa kabajuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Hirmaannaa dubartootaa fi dargaggootaa jajjabeessuu
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Nageenya, misoomaa fi guddia biyyaa irratti hirmaachuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Mankaraarestummaa, dhaadhestummaa fi gooli-uummatummaa ittisuu.
                    </div>
                </div>
            ),
        },
        {
            title: "Kaayyoo",
            content: (
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Hordoftoota amantaa gara garaa giddutti aadn aan waldanda’uu, walkabajuu fi nageenyaan  waliin jiraachuu cimee akka itti fufu gochuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Miseensotni dhaaabbilee amantaa nageenyaa fi tokkummaa biyyaatiif gumaacha taasifamuuf  deeggarsa kennu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Amantaalee Oromiyaa keessatti argamanu dahoo godhachuun iddo gara garaatti rakkoolee
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        nageenyaa hawaasaa booressanu fi misooma biyyoolessaatti gufuu ta’uu danda’anu po’achuu fi addaan baasuu, kallattii furmaataa kaa’uu fi akka hojii irra oolanu waliin hojjechu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Misooma fi guddina biyyaatiif dhaabbilee mootummaa fi mit-mootummaa waliin wal-tumsuun hojii misoomaa irratti hirmaachuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Dhimmoota biyyoolessaa waliin moootummaan hojjatu irratti dhaabbatichi yammu gaafatamu hirmaanna taasiisuu,
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        Dhaabbileee miseensoota guddutti wal-dhabdeen yammu uumamu eeyyama qaamoota wal dhabaniin hojii araaarsuu hojjachuu.
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
