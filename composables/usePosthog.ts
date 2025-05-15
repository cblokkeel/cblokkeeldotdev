export const usePosthog = () => {
	const { $posthog } = useNuxtApp();

    onBeforeRouteLeave((_, __, next) => {
        $posthog.capture("$pageleave", {
            current_url: window.location.href,
        });

        next();
    });

	return {
		$posthog,
	};
};
