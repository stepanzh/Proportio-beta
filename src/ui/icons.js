const getVariableName = (x) => Object.keys(x)[0]

import { ArrowDownIcon as ArrowDownIconOutline } from '@heroicons/vue/24/outline'
ArrowDownIconOutline.__name = getVariableName({ ArrowDownIconOutline })

import { ArrowLeftIcon as ArrowLeftIconOutline } from '@heroicons/vue/24/outline'
ArrowLeftIconOutline.__name = getVariableName({ ArrowLeftIconOutline })

import { ArrowUpIcon as ArrowUpIconOutline } from '@heroicons/vue/24/outline'
ArrowUpIconOutline.__name = getVariableName({ ArrowUpIconOutline })

import { ArrowsUpDownIcon as ArrowsUpDownIconMini } from '@heroicons/vue/16/solid'
ArrowsUpDownIconMini.__name = getVariableName({ ArrowsUpDownIconMini })

import { Bars3Icon as Bars3IconOutline } from '@heroicons/vue/24/outline'
Bars3IconOutline.__name = getVariableName({ Bars3IconOutline })

import { CalculatorIcon as CalculatorIconMini } from '@heroicons/vue/16/solid'
CalculatorIconMini.__name = getVariableName({ CalculatorIconMini })

import { ListBulletIcon as ListBulletIconMini } from '@heroicons/vue/16/solid'
ListBulletIconMini.__name = getVariableName({ ListBulletIconMini })

import { PlusCircleIcon as PlusCircleIconMini } from '@heroicons/vue/16/solid'
PlusCircleIconMini.__name = getVariableName({ PlusCircleIconMini })

import { TrashIcon as TrashIconOutline } from '@heroicons/vue/24/outline'
TrashIconOutline.__name = getVariableName({ TrashIconOutline })

import { QuestionMarkCircleIcon as QuestionMarkCircleIconOutline } from '@heroicons/vue/24/outline'
QuestionMarkCircleIconOutline.__name = getVariableName({ QuestionMarkCircleIconOutline })


export default [
    ArrowDownIconOutline,
    ArrowLeftIconOutline,
    ArrowUpIconOutline,
    ArrowsUpDownIconMini,
    Bars3IconOutline,
    CalculatorIconMini,
    ListBulletIconMini,
    PlusCircleIconMini,
    TrashIconOutline,
    QuestionMarkCircleIconOutline,
]