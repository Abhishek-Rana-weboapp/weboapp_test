import { lazy } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import ProtectRoute from './ProtectRoute';
import Home from '../pages/home/Home';
import ServiceTemplate from '../pages/services/ServiceTemplate';
import NotFound from '../pages/notFound/NotFound';
import AboutUs from '../pages/about/AboutUs';
import Career from '../pages/career/Career';
import JobApplication from '../pages/career/JobApplication';
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blogs/Blog';
import Login from '../pages/auth/Login';
import PageLoader from '../components/pageLoader/PageLoader';
import { Suspense } from 'react';
import App from '../App';
import BlogSection from '../pages/admin/BlogSection';
import BlogList from '../pages/admin/BlogList';
import CreateBlog from '../pages/blogs/CreateBlog';
import JobsSection from '../pages/admin/JobsSection';
import JobsList from '../pages/admin/JobsList';
import JobForm from '../pages/admin/JobForm';

// Lazy loaded components
const Services =
	lazy(
		() =>
			import(
				'../pages/services/Services'
			),
	);
const Industries =
	lazy(
		() =>
			import(
				'../pages/industries/Industries'
			),
	);
const IndustryTemplate =
	lazy(
		() =>
			import(
				'../pages/industries/IndustryTemplate'
			),
	);
const Technologies =
	lazy(
		() =>
			import(
				'../pages/technologies/Technologies'
			),
	);
const Blogs =
	lazy(
		() =>
			import(
				'../pages/blogs/Blogs'
			),
	);
const Portfolio =
	lazy(
		() =>
			import(
				'../pages/portfolio/Portfolio'
			),
	);
const ProjectDetails =
	lazy(
		() =>
			import(
				'../pages/portfolio/ProjectDetails'
			),
	);

const LazyRoute =
	({
		children,
	}) => {
		return (
			<Suspense
				fallback={
					<PageLoader />
				}
			>
				{
					children
				}
			</Suspense>
		);
	};

export const routes =
	[
		{
			element:
				(
					<App />
				),
			children:
				[
					{
						path: '/',
						index: true,
						element:
							(
								<Home />
							),
					},
					{
						path: '/services',
						element:
							(
								<LazyRoute>
									<Services />
								</LazyRoute>
							),
					},
					{
						path: '/services/:service',
						element:
							(
								<ServiceTemplate />
							),
					},
					{
						path: '/industries',
						element:
							(
								<LazyRoute>
									<Industries />
								</LazyRoute>
							),
					},
					{
						path: '/industries/:industry',
						element:
							(
								<LazyRoute>
									<IndustryTemplate />
								</LazyRoute>
							),
					},
					{
						path: '/technologies',
						element:
							(
								<LazyRoute>
									<Technologies />
								</LazyRoute>
							),
					},
					{
						path: '/blog',
						element:
							(
								<LazyRoute>
									<Blogs />
								</LazyRoute>
							),
					},
					{
						path: '/about',
						element:
							(
								<AboutUs />
							),
					},
					{
						path: '/contact',
						element:
							(
								<Contact />
							),
					},
					{
						path: '/career',
						element:
							(
								<Career />
							),
					},
					{
						path: '/career/apply/:jobId',
						element:
							(
								<JobApplication />
							),
					},
					{
						path: '/portfolio',
						element:
							(
								<LazyRoute>
									<Portfolio />
								</LazyRoute>
							),
					},
					{
						path: '/project/:id',
						element:
							(
								<LazyRoute>
									<ProjectDetails />
								</LazyRoute>
							),
					},
					{
						path: '/blog/:id',
						element:
							(
								<Blog />
							),
					},
					{
						path: '/login',
						element:
							(
								<Login />
							),
					},

					// Admin routes

					{
						path: '/admin',
						element:
							(
								<ProtectRoute>
									<AdminLayout />
								</ProtectRoute>
							),
						children:
							[
								{
									path: 'blogSection',
									element:
										(
											<BlogSection />
										),
									children:
										[
											{
												index: true,
												element:
													(
														<BlogList />
													),
											},
											{
												path: 'new',
												element:
													(
														<CreateBlog />
													),
											},
											{
												path: 'edit/:id',
												element:
													(
														<CreateBlog />
													),
											},
										],
								},
								{
									path: 'jobs',
									element:
										(
											<JobsSection />
										),
									children:
										[
											{
												index: true,
												element:
													(
														<JobsList />
													),
											},
											{
												path: 'new',
												element:
													(
														<JobForm />
													),
											},
											{
												path: 'edit/:id',
												element:
													(
														<JobForm />
													),
											},
										],
								},
							],
					},

					{
						path: '*',
						element:
							(
								<NotFound />
							),
					},
				],
		},
	];
