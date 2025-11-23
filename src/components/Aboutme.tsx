import Styles from '@/styles/aboutme.module.css';
import {FaUser, FaEnvelope, FaCertificate, FaPhone, FaBirthdayCake, FaGraduationCap} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
const AboutMe = () => {
    return(
        <>
            <div id='aboutme' className={Styles.aboutMe}>
                <h1>About Me</h1>

                <div className={Styles.row}>
                    <div className={Styles.item}>
                        <h3><FaUser className={Styles.icon}/> 이름:</h3>
                        <p>신승철</p>
                    </div>
                    <div className={Styles.item}>
                        <h3><FaBirthdayCake className={Styles.icon}/> 생일:</h3>
                        <p>97.01.27</p>
                    </div>
                    <div className={Styles.item}>
                        <h3><MdLocationOn className={Styles.icon}/> 지역:</h3>
                        <p>대전광역시</p>
                    </div>
                    <div className={Styles.item}>
                        <h3><FaPhone className={Styles.icon}/> 연락처:</h3>
                        <p>010-2735-7981</p>
                    </div>
                </div>

                <div className={Styles.row}>
                    <div className={Styles.item}>
                        <h3><FaEnvelope className={Styles.icon}/> 이메일:</h3>
                        <p>juns0858@naver.com</p>
                    </div>
                    <div className={Styles.item}>
                        <h3><FaGraduationCap className={Styles.icon}/> 학력:</h3>
                        <p>대전대학교 졸업 (전자/정보통신 공학학사)</p>
                    </div>
                </div>
                
                <div className={Styles.row}>
                    <div className={Styles.item}>
                        <h3><FaCertificate className={Styles.icon}/> 자격증:</h3>
                        <p>정보처리기사, 네트워크 관리사 2급, 리눅스 마스터 2급, SQLD</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;