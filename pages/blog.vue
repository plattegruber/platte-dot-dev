<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <NuxtLink :to="article._path">go</NuxtLink>
            </div>
        </ContentList>
    </div>
</template>