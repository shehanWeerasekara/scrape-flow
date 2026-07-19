"use client";

import {usePathname} from "next/navigation";
import { Breadcrumb , BreadcrumbList, BreadcrumbItem, BreadcrumbLink} from "@/components/ui/breadcrumb";
import {Fragment} from "react";
import {MobileSidebar} from "@/components/SideBar";

const BreadCrumbHeader = () => {
	const pathName = usePathname();
	const paths = pathName === "/" ? [""] : pathName?.split("/");

	return (
		<div className="flex items-center flex-start">
			<MobileSidebar />
			<Breadcrumb>
				<BreadcrumbList>
					{paths.map((path,index) => {
						return (
							<Fragment key={index}>
								<BreadcrumbItem>
									<BreadcrumbLink className="capitalize" href={`/${path}`}>
										{path === "" ? "home" : path}
									</BreadcrumbLink>
								</BreadcrumbItem>
							</Fragment>
						)
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	)
}

export default BreadCrumbHeader;