import { createContext, useContextSelector } from 'use-context-selector';

const ComponentsExtensionContext = createContext( {} );

export const useComponentExtensionsContext = () => useContextSelector( ComponentsExtensionContext, state => state );
export const useComponentsExtension = ( hookName ) => {
	const extensions = useComponentExtensionsContext();
	if ( ! extensions || ! (extensions[ hookName ] || null) ) {
		const EmptyFragment = () => <></>;
		EmptyFragment.isEmpty = true;

		return EmptyFragment;
	}

	return extensions[ hookName ];
}

export const ComponentsExtensionProvider = ( { children, extensions } ) => (
	<ComponentsExtensionContext.Provider value={ extensions }>
		{ children }
	</ComponentsExtensionContext.Provider>
);