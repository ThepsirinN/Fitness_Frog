import styles from './deletemodal.module.css'

const DeleteModal = () => {
    return(
        <div className={styles["del-container"]}>
            <h2>Item No.10 will be deleted.</h2>
            <h2>Are you sure?</h2>
            <div className={styles["del-button"]}>
                <button className={styles["submit"]}>Yes</button>
                <button className={styles["cancle"]}>No</button>
            </div>
        </div>
    )
}

export default DeleteModal