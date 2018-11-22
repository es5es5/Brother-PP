<template>
	<div id="main_components">
		<Header></Header>

        <div>main-components</div>

		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import Header from './../components/Header.vue'

export default {
	name: 'Main',
	components: {
		Header
	},
	methods: {}
}
</script>

<style lang="scss">

</style>
