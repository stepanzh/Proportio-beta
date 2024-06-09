const getVariableName = (x) => Object.keys(x)[0]

import { CalculatorIcon as CalculatorIconMini } from '@heroicons/vue/16/solid'
CalculatorIconMini.__name = getVariableName({ CalculatorIconMini })

import { ListBulletIcon as ListBulletIconMini } from '@heroicons/vue/16/solid'
ListBulletIconMini.__name = getVariableName({ ListBulletIconMini: ListBulletIconMini })

import { PlusCircleIcon as PlusCircleIconMini } from '@heroicons/vue/16/solid'
PlusCircleIconMini.__name = getVariableName({ PlusCircleIconMini: PlusCircleIconMini })


export default [
    CalculatorIconMini,
    ListBulletIconMini,
    PlusCircleIconMini,
]