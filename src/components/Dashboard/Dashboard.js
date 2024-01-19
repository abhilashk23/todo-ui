import React, { useState } from 'react'
import { Drawer, Button, DatePicker } from 'antd';

function Dashboard() {

    const [date, setDate] = useState("");
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                New account
            </Button>
            <Drawer
                title="Create a new account"
                placement='bottom'
                width={720}
                onClose={onClose}
                open={open}
            >
                <DatePicker onChange={onChange} />
                <p>{date}</p>
            </Drawer>
        </div>
    )
}

export default Dashboard