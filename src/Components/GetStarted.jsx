import styles      from "../styles/style";
import { arrowUp } from "../assets";

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-slate-400 to-slate-600 p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className={`${styles.textGradient}`}>Get</span>
                </p>
                <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
            </div>

            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className={`${styles.textGradient}`}>Started</span>
            </p>
        </div>
    </div>
);

export default GetStarted;