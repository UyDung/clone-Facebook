import classes from "./Notification.module.css";
import threedots from '../../assets/three-dots.svg';

const Notification = () => {
    return (
        <div className={classes.notification}>
            <div className={classes.title}>
                <h2>Notifications </h2>
                <img src={threedots} alt="" />
            </div>

            <div className={classes.new}>
                <h4>New</h4>
                <a href="index.html">See all</a>
            </div>

            <ul className={classes["new-items"]}>
                <li>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>
            </ul>

            <h3>Earlier</h3>
            <ul className={classes["list-notification"]}>
                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>
                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>
                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>

                <li className={classes["item"]}>
                    <div className={classes["avatar"]}>
                        <img
                            src="https://external.fhan2-4.fna.fbcdn.net/safe_image.php?d=AQH4QGXKFAGTkkcp&w=84&h=84&url=https%3A%2F%2Fscontent.fhan2-2.fna.fbcdn.net%2Fv%2Ft1.6435-1%2Fcp0%2Fc0.0.50.50a%2Fp50x50%2F211105567_108877184805242_584174702562438241_n.jpg%3Fccb%3D1-5%26_nc_ohc%3DdfkN7ynhencAX9jU_9C%26tn%3DevS4LgivDtfRnDJu%26_nc_ht%3Dscontent.fhan2-2.fna%26oh%3Df1bdf276e8ad10b7518eb34a57c7c70a%26oe%3D61973BAE&cfs=1&upscale=1&ext=emg0&_nc_oe=6ee33&_nc_sid=7e691c&ccb=3-5&_nc_hash=AQEwTzQG2AxRrzF-"
                            alt="avatar"
                        />
                    </div>

                    <div className={classes["text"]}>
                        <span>
                            <strong>Hưng Phan</strong>commented on a photo you're following in{" "}
                            <strong>ReacJS - Viet Nam</strong>
                        </span>
                        <span className="time">2 days ago</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Notification;
