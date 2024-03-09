import React, { ReactNode } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import * as styles from './dialog.module.css'
import { Button } from '@components/atoms'

interface DialogProps {
  children: ReactNode
  dialogTitle: string
  triggerButtonText: string
}

export const Dialog = ({
  children,
  dialogTitle,
  triggerButtonText,
}: DialogProps) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <Button buttonText={triggerButtonText} />
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.dialogOverlay} />
        <RadixDialog.Content className={styles.dialogContent}>
          <RadixDialog.Title asChild className={styles.dialogTitle}>
            <h2>{dialogTitle}</h2>
          </RadixDialog.Title>
          <RadixDialog.Close asChild className={styles.dialogClose}>
            <button aria-label='Close'>
              <Cross2Icon height={20} width={20} />
            </button>
          </RadixDialog.Close>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
