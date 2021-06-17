import React, { Fragment, useState } from 'react';
import ModalVideo from 'react-modal-video';
import './ModalVideoStyle.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';

export default function ModalVideoComponent() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            < Fragment>
                <ModalVideo
                    channel='youtube'
                    autoplay isOpen={isOpen}
                    videoId="s05oOsz_SvA"
                    onClose={() => setOpen(false)} />
                <div style={{ width: "100%", textAlign: "center", position: "absolute", top: "50%" }}>
                    <IconButton onClick={() => setOpen(true)}>
                        <PlayArrowIcon className="iconPlay" />
                    </IconButton>
                </div>
            </Fragment >
        </div>
    )
}