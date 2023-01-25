import React from 'react';

import { _x } from '@wordpress/i18n';

import DegreeProgramEditFormProvider from 'contexts/DegreeProgramEditFormProvider';

import Tabs from '../Tabs';
import AdmissionRequirements from './AdmissionRequirements';
import Content from './Content';
import FormHeading from './FormHeading';
import General from './General';
import OrganizationalLinks from './OrganizationalLinks';

const DegreeProgramEditForm = () => {
    return (
        <DegreeProgramEditFormProvider>
            <FormHeading />
            <Tabs
                tabs={[
                    {
                        name: 'general',
                        title: _x(
                            'At a glance',
                            'backoffice: Degree program edit form',
                            'fau-degree-program',
                        ),
                        component: <General />,
                    },
                    {
                        name: 'content',
                        title: _x(
                            'Content',
                            'backoffice: Degree program edit form',
                            'fau-degree-program',
                        ),
                        component: <Content />,
                    },
                    {
                        name: 'admission-requirements',
                        title: _x(
                            'Admission requirements, application and enrollment',
                            'backoffice: Degree program edit form',
                            'fau-degree-program',
                        ),
                        component: <AdmissionRequirements />,
                    },
                    {
                        name: 'organizational-links',
                        title: _x(
                            'Organizational notes/links',
                            'backoffice: Degree program edit form',
                            'fau-degree-program',
                        ),
                        component: <OrganizationalLinks />,
                    },
                ]}
            />
        </DegreeProgramEditFormProvider>
    );
};

export default DegreeProgramEditForm;
