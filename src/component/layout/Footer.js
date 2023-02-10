import styles from './Footer.module.css';
function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footersection}>
                <p>주식회사 비트교육센터</p>
                <p>대표 : 홍길동</p>
                <p>주소: 서울특별시 서초구 서초대로74길 33</p>

            </div>
            
        </div>
            
    )
}
export default Footer
