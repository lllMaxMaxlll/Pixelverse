import React from "react";
import style from "./BgLanding.module.css";
import {
	SiXbox,
	SiPlaystation,
	SiPlaystation2,
	SiPlaystation3,
	SiPlaystation4,
	SiPlaystationvita,
	SiNintendogamecube,
	SiNintendoswitch,
	SiWindows,
} from "react-icons/si";

export const BgLanding = () => {
	return (
		<section>
			<div className={style.container}>
				<div className={style.icons}>
					<SiXbox />
					<SiPlaystation />
					<SiPlaystation2 />
					<SiPlaystation3 />
					<SiPlaystation4 />
					<SiWindows />
					<SiPlaystationvita />
					<SiNintendoswitch />
					<SiNintendogamecube />
				</div>
			</div>
		</section>
	);
};
