import React from 'react'
import classes from'./Dialogs.module.css'

const Dialogs = () => {
  return(
      <div className={classes.dialogs}>
          <div className={classes.dialogsItems}>
              <div className={classes.dialog + ' ' +classes.active}>
                  Eugen
              </div>
              <div className={classes.dialog}>
                  Vlados
              </div>
              <div className={classes.dialog}>
                  Kira
              </div>
              <div className={classes.dialog}>
                  Kirill
              </div>
              <div className={classes.dialog}>
                  Nadya
              </div>
          </div>

          <div className={classes.messages}>
              <div className={classes.message}>Hi</div>
              <div className={classes.message}>How are you?</div>
              <div className={classes.message}>Yo</div>
          </div>
      </div>
  )
}

export default Dialogs