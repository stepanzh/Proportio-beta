
<template>
    <AppScreen>
        <template #nav>
            <AppNavBar title="Поддержать проект">
                <template #left-menu>
                    <PIconButton @click="proportioNav.navToCalc()">
                        <ArrowLeftIconOutline />
                    </PIconButton>
                </template>
            </AppNavBar>
        </template>
        <template #body>
            <header>
                <h2>Поддержите Пропорцио</h2>
            </header>
            <main>
                <section style="margin-top: 24px;">
                    Потрачу на развитие Пропорцио и разработку мобильного приложения.
                </section>
                <section class="donate-actions">
                    <PLinkButton href="https://pay.cloudtips.ru/p/01aa1961" target="_blank" class="btn-donate btn-filled-primary">
                        💰 Задонатить через CloudTips
                    </PLinkButton>
                    <PLinkButton href="https://www.tbank.ru/cf/ASVy6k1gw7z" target="_blank" class="btn-donate btn-filled-primary">
                        💰 Задонатить переводом в Т-Банк
                    </PLinkButton>
                </section>
            </main>
        </template>
    </AppScreen>
</template>

<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import AppScreen from '@/components/AppScreen.vue'
import { useProportioNavStore } from '@/stores/proportioNav'
import PLinkButton from '@/ui/PLinkButton.vue'

const proportioNav = useProportioNavStore()
</script>

<style>
.donate-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0;
}

.btn-donate {
    padding: 12px 32px;
    border-radius: 8px;
    font-weight: var(--weight-semibold);
}

.btn-donate:hover {
    text-decoration: none;
}
</style>