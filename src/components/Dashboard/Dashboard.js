import React, { useState } from 'react'
import { Drawer, Button, DatePicker } from 'antd';

function Dashboard() {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
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
                <DatePicker.RangePicker
                    style={{
                        width: '100%',
                    }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                />
            </Drawer>
        </div>
    )
}

export default Dashboard