const getVariableName = (x) => Object.keys(x)[0]

import { ArrowLeftIcon as ArrowLeftIconOutline } from '@heroicons/vue/24/outline'
ArrowLeftIconOutline.__name = getVariableName({ ArrowLeftIconOutline })

import { Bars3Icon as Bars3IconOutline } from '@heroicons/vue/24/outline'
Bars3IconOutline.__name = getVariableName({ Bars3IconOutline })

import { CalculatorIcon as CalculatorIconMini } from '@heroicons/vue/16/solid'
CalculatorIconMini.__name = getVariableName({ CalculatorIconMini })

import { ListBulletIcon as ListBulletIconMini } from '@heroicons/vue/16/solid'
ListBulletIconMini.__name = getVariableName({ ListBulletIconMini: ListBulletIconMini })

import { PlusCircleIcon as PlusCircleIconMini } from '@heroicons/vue/16/solid'
PlusCircleIconMini.__name = getVariableName({ PlusCircleIconMini: PlusCircleIconMini })

import { QuestionMarkCircleIcon as QuestionMarkCircleIconOutline } from '@heroicons/vue/24/outline'
QuestionMarkCircleIconOutline.__name = getVariableName({ QuestionMarkCircleIconOutline })


export default [
    ArrowLeftIconOutline,
    Bars3IconOutline,
    CalculatorIconMini,
    ListBulletIconMini,
    PlusCircleIconMini,
    QuestionMarkCircleIconOutline,
]