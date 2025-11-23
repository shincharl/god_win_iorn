import Image from "next/image";
import Styles from "@/styles/blog.module.css"
const Blog = () => {
    return (
        <>
            <div id="blog" className={Styles.wrap}>
                <h1>Shin&apos;s Study Blog</h1>
                <div className={Styles.blogImage}>
                    <Image src="/blog.jpg" alt="블로그 입장 이미지" width={1100} height={400} quality={100} priority />
                     <div className={Styles.projectGoWrap}>
                        <a className={Styles.projectGo} href="https://chamchicoder.tistory.com/">Go Shin&apos;s Blog →</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;