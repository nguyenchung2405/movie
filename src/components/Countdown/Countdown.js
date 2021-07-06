import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Typography from '@material-ui/core/Typography';


export default function Countdown() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if (minutes === 0 && seconds === 0) {
                Swal.fire({
                    title: 'Opps...',
                    text: 'Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: 'rgb(251, 66, 38)',
                }).then(() => {
                    window.location.reload(true);
                })
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {minutes === 0 && seconds === 0 ? null
                : <Typography variant="h5" display="block" gutterBottom color="error">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
            }
        </div>
    )
}
