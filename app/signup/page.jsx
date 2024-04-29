import styles from "@/app/ui/signup/signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Signup</h1>
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;